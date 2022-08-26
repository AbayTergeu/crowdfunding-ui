import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import InvestmentsService from "../../services/investments.service";
import { useState, useEffect } from "react";

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  const [amount, setAmount] = useState(0);
  const [currencyCode, setCurrencyCode] = useState();

  useEffect(() => {
    const loadAccountData = async () => {
      var token = "";
      const {data} = await InvestmentsService.getAccountByClientId(2, token);
      console.log(data);
      setAmount(data.saldo);
      setCurrencyCode(data.currencyCode);
    }
    loadAccountData();
  }, []);
  
  return (
    <React.Fragment>
      <Title>Recent Deposits</Title>
      <Typography component="p" variant="h4">
        {amount}  {currencyCode}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        {new Date().toDateString()}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}
