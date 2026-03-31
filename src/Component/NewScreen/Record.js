import * as React from "react";
import {
  Box,
  Button,
  Typography,
  Paper,

  Stack,
  alpha,
  Avatar,
  Container,

} from "@mui/material";
import {
  GridRowModes,
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,

} from "@mui/x-data-grid";
import { randomId } from "@mui/x-data-grid-generator";

// Icons
import AddIcon from "@mui/icons-material/Add";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import SaveTwoToneIcon from "@mui/icons-material/SaveTwoTone";
import CancelTwoToneIcon from "@mui/icons-material/CloseTwoTone";

import VerifiedIcon from "@mui/icons-material/Verified";

const initialRows = [
  { id: randomId(), name: "Raju Sheoran", age: 25, joinDate: new Date(), role: "Admin" },
  { id: randomId(), name: "John Doe", age: 36, joinDate: new Date(), role: "Foreigner" },
  { id: randomId(), name: "Sneha Kapoor", age: 19, joinDate: new Date(), role: "Indian" },
];

function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [...oldRows, { id, name: "", age: "", role: "Indian", isNew: true }]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: "name" },
    }));
  };

  return (
    <GridToolbarContainer className="flex justify-between items-center p-6 border-b border-slate-100/50">
      <Stack>
        <Typography variant="h6" className="font-black text-slate-900 tracking-tight flex items-center gap-2">
          Visitor Directory 
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        </Typography>
        <Typography variant="caption" className="text-slate-400 font-medium">
          Manage and track all guest entries in real-time
        </Typography>
      </Stack>
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={handleClick}
        className="rounded-2xl px-6 py-3 normal-case font-bold bg-indigo-600 hover:bg-indigo-700 shadow-xl shadow-indigo-200/50 transition-all hover:-translate-y-0.5 active:scale-95"
      >
        New Entry
      </Button>
    </GridToolbarContainer>
  );
}

export default function AddRecord() {
  const [rows, setRows] = React.useState(initialRows);
  const [rowModesModel, setRowModesModel] = React.useState({});

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const columns = [
    { 
      field: "name", 
      headerName: "Identity", 
      flex: 1, 
      minWidth: 220, 
      editable: true,
      renderCell: (params) => (
        <Stack direction="row" spacing={2} alignItems="center" className="h-full">
          <Avatar 
            className="w-10 h-10 ring-2 ring-white shadow-sm font-black text-sm"
            sx={{ bgcolor: alpha('#4f46e5', 0.1), color: '#4f46e5' }}
          >
            {params.value ? params.value.charAt(0) : "?"}
          </Avatar>
          <Box>
            <Typography className="font-bold text-slate-800 text-[0.9rem] leading-none flex items-center gap-1">
              {params.value}
              {params.row.role === 'Admin' && <VerifiedIcon className="text-blue-500 text-[16px]" />}
            </Typography>
            <Typography className="text-[11px] text-slate-400 font-medium mt-1">
              UID: {params.row.id.toString().substring(0, 8)}
            </Typography>
          </Box>
        </Stack>
      )
    },
    { 
      field: "age", 
      headerName: "Age", 
      type: "number", 
      width: 80, 
      align: 'left', 
      headerAlign: 'left', 
      editable: true,
      renderCell: (params) => <span className="font-semibold text-slate-600">{params.value} yrs</span>
    },
    { 
      field: "joinDate", 
      headerName: "Check-in", 
      type: "date", 
      width: 130, 
      editable: true,
      renderCell: (params) => <span className="text-slate-500 text-xs font-medium">{params.value?.toLocaleDateString()}</span>
    },
    {
      field: "role",
      headerName: "Category",
      width: 140,
      editable: true,
      type: "singleSelect",
      valueOptions: ["Indian", "Foreigner", "Admin"],
      renderCell: (params) => {
        const colors = {
          Indian: "bg-indigo-50 text-indigo-600 border-indigo-100",
          Foreigner: "bg-amber-50 text-amber-600 border-amber-100",
          Admin: "bg-rose-50 text-rose-600 border-rose-100"
        };
        return (
          <div className={`px-3 py-1 rounded-lg text-[10px] uppercase tracking-wider font-black border ${colors[params.value] || 'bg-slate-100'}`}>
            {params.value}
          </div>
        );
      },
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Control",
      width: 100,
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
        if (isInEditMode) {
          return [
            <GridActionsCellItem icon={<SaveTwoToneIcon className="text-emerald-500" />} label="Save" onClick={() => setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } })} />,
            <GridActionsCellItem icon={<CancelTwoToneIcon className="text-slate-400" />} label="Cancel" onClick={() => setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View, ignoreModifications: true } })} />,
          ];
        }
        return [
          <GridActionsCellItem icon={<EditTwoToneIcon className="text-indigo-400 hover:text-indigo-600 transition-colors" />} label="Edit" onClick={() => setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } })} />,
          <GridActionsCellItem icon={<DeleteTwoToneIcon className="text-rose-300 hover:text-rose-500 transition-colors" />} label="Delete" onClick={() => setRows(rows.filter((r) => r.id !== id))} />,
        ];
      },
    },
  ];

  return (
    <div className="min-h-screen bg-[#fcfdfe] py-16">
      <Container maxWidth="lg">
        {/* Stats Summary - New Attractive Element */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {['Total Visitors', 'Current Tour', 'Safety Rating'].map((label, i) => (
            <Paper key={i} elevation={0} className="p-6 rounded-[2rem] border border-slate-100 bg-white/50 backdrop-blur-sm">
              <Typography variant="caption" className="text-slate-400 font-bold uppercase tracking-widest">{label}</Typography>
              <Typography variant="h4" className="font-black text-slate-800">{i === 2 ? '99.8%' : (rows.length + (i * 12))}</Typography>
            </Paper>
          ))}
        </div>

        <Paper 
          elevation={0} 
          className="rounded-[3rem] overflow-hidden border border-white bg-white/80 backdrop-blur-3xl shadow-[0_32px_64px_-15px_rgba(0,0,0,0.05)]"
        >
          <div className="h-[650px] w-full px-2 pb-6">
            <DataGrid
              rows={rows}
              columns={columns}
              editMode="row"
              rowHeight={80}
              rowModesModel={rowModesModel}
              onRowModesModelChange={(newModel) => setRowModesModel(newModel)}
              processRowUpdate={processRowUpdate}
              slots={{ toolbar: EditToolbar }}
              slotProps={{ toolbar: { setRows, setRowModesModel } }}
              sx={{
                border: 'none',
                '& .MuiDataGrid-columnHeaders': {
                  borderBottom: 'none',
                  color: '#94a3b8',
                  fontSize: '0.65rem',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  pt: 2
                },
                '& .MuiDataGrid-row': {
                  mx: 2,
                  mt: 1,
                  borderRadius: '24px',
                  border: '1px solid transparent',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    backgroundColor: '#fff !important',
                    borderColor: '#f1f5f9',
                    boxShadow: '0 20px 25px -5px rgba(0,0,0,0.03)',
                    transform: 'scale(1.01) translateY(-2px)',
                  },
                  '&.Mui-selected': {
                    backgroundColor: alpha('#4f46e5', 0.04) + ' !important',
                    borderColor: alpha('#4f46e5', 0.1),
                  }
                },
                '& .MuiDataGrid-cell': { borderBottom: 'none' },
                '& .MuiDataGrid-footerContainer': { borderTop: 'none', px: 4 },
              }}
            />
          </div>
        </Paper>
      </Container>
    </div>
  );
}