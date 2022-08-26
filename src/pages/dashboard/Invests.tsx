import * as React from 'react';
import { DataGrid, GridColumns, GridRowsProp, GridEventListener} from '@mui/x-data-grid';
import {
  randomCreatedDate,
  randomTraderName,
  randomUpdatedDate,
} from '@mui/x-data-grid-generator';
import Button from '@mui/material/Button';
import { useMovieData } from '@mui/x-data-grid-generator';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import InvestmentsService from "../../services/investments.service";
import AuthService from "../../services/auth.service";
import CountryService from "../../services/country.service";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Checkout from '../payment/Checkout';
import ReactDOM from 'react-dom';

export default function Invests() {
  const data = useMovieData();
  const [content, setContent] = useState("");
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const loadPageData = async () => {
      setLoading(true);
      var token = AuthService.getCurrentUser().Token;
      const { data } = await InvestmentsService.getList(token);
      console.log(data);
      

      const userRows = data
                  .map((data, index) => ({
                    id: data.id,
                    InvestmentNumber: data.investmentNumber,
                    daysCount: data.daysCountry,
                    investmentAmount: data.investmentAmount,
                    currency: data.currency,
                    interestRate: data.interestRate + "%",
                    countryAvatar: data.countryAvatar,
                    countryCode: data.countryCode,
                    amount: 0.00
                    }));
            
      setRows(userRows);        

    }
    loadPageData();
  }, []);
  
  const json = JSON.stringify(content);

  
    
    
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid  
        {...data}
        rows={rows}
        columns={columns}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </div>
  );
}





const columns: GridColumns = [
  { field: 'InvestmentNumber', headerName: 'Investment Number', width: 180, editable: false },
  
  {
    field: "country",
    headerName: "Country",
    width: 200,
    renderCell: (params) => {
      return (
        <>
          <Avatar src={params.row.countryAvatar} />
        </>
      );
    }
  },

  
  { field: 'daysCount', headerName: 'Days Count', type: 'number', editable: false },
  { field: 'investmentAmount', headerName: 'Investment Amount', type: 'number', editable: false },
  { field: 'currency', headerName: 'Currency', width: 180, editable: false },
  { field: 'interestRate', headerName: 'Interest Rate', type: 'number', editable: false },
  { field: 'amount', headerName: 'Amount', type: 'number', editable: true},
  {
    field: "pay",
    headerName: "Pay",
    sortable: false,
    renderCell: (params) => {
      const onClick = (e) => {
        alert(params.row);
        //root.render(<Checkout name="Саша" />);
      };

    return <Button  /* href="/review"  */onClick={onClick}>pay</Button>;
    }
  },
];
