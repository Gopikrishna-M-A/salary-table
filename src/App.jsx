import "./App.css";
import { useState } from "react";
function App() {

  const [wage, setWage] = useState(675);
  const [days, setDays] = useState(22);
  const [Esi, setEsi] = useState(0);
  const [Epf, setEpf] = useState(0);
  const [Admin, setAdmin] = useState(0);
  const [Eldi, setEldi] = useState(0);
  const [Total, setTotal] = useState(0);
  const [Gst, setGst] = useState(0);
  const [Service, setService] = useState(0);
  const [servicePer, setServicePer] = useState(4.05);
  const [Net, setNet] = useState(0);

  const calc = () => {
    const esicPer = 3.25;
    const ESI = (wage * esicPer) / 100;
    setEsi(ESI);

    const epfdPer = 12;
    const EPF = (wage * epfdPer) / 100;
    setEpf(EPF);

    const adminPer = 0.5;
    const ADMIN = (wage * adminPer) / 100;
    setAdmin(ADMIN);

    const eldiPer = 0.5;
    const ELDI = (wage * eldiPer) / 100;
    setEldi(ELDI);

    const TOTAL = parseInt(wage) + ESI + EPF + ADMIN + ELDI;
    setTotal(TOTAL);

    const gstPer = 18;
    const GST = (TOTAL * gstPer) / 100;
    setGst(GST);

    const SERVICE = (TOTAL * servicePer) / 100;
    setService(SERVICE);

    const NET = TOTAL + GST + SERVICE;
    setNet(NET);

  };

  const Download = () => {
    window.print();
  }


  return (
    <>
      <div className="btn-wrapper">
        <button onClick={calc}>Calculate</button>
        <button onClick={Download}>Print pdf</button>
      </div>
      
    
      <div className="box">
      <table>
  <thead>
    <tr>
      <th colSpan="6" contentEditable>SALARY CALCULATION SHEET FOR THE MONTH OF AUGUST 2023</th>
    </tr>
    <tr>
      <th>SI</th>
      <th colSpan="2">Daily Wage</th>
      <th>Working days</th>
      <th>Percentage</th>
      <th>Total</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Basic Wages</td>
      <td className="inp"><input value={wage} onChange={(e) => setWage(e.target.value)} className="display" type="text" /></td>
      <td className="inp"><input name="days" value={days} onChange={(e) => setDays(e.target.value)} className="display" type="text" /></td>
      <td></td>
      <td>{(wage * days).toFixed(2)}</td>
    </tr>
    <tr>
      <td>2</td>
      <td>ESIC</td>
      <td>{Esi.toFixed(2)}</td>
      <td>{days}</td>
      <td>3.25%</td>
      <td>{(Esi * days).toFixed(2)}</td>
    </tr>
    <tr>
      <td>3</td>
      <td>EPFD</td>
      <td>{Epf.toFixed(2)}</td>
      <td>{days}</td>
      <td>12%</td>
      <td>{(Epf * days).toFixed(2)}</td>
    </tr>
    <tr>
      <td>4</td>
      <td>EPF Admn</td>
      <td>{Admin.toFixed(2)}</td>
      <td>{days}</td>
      <td>0.5%</td>
      <td>{(Admin * days).toFixed(2)}</td>
    </tr>
    <tr>
      <td>5</td>
      <td>ELDI</td>
      <td>{Eldi.toFixed(2)}</td>
      <td>{days}</td>
      <td>0.5%</td>
      <td>{(Eldi * days).toFixed(2)}</td>
    </tr>
    <tr>
      <td>6</td>
      <td><strong>TOTAL</strong></td>
      <td><strong></strong></td>
      <td>{days}</td>
      <td></td>
      <td><strong>{(Total * days).toFixed(2)}</strong></td>
    </tr>
    <tr>
      <td>7</td>
      <td>GST</td>
      <td>{Gst.toFixed(2)}</td>
      <td>{days}</td>
      <td>18%</td>
      <td>{(Gst * days).toFixed(2)}</td>
    </tr>
    <tr>
      <td>8</td>
      <td>Service Charge</td>
      <td>{Service.toFixed(2)}</td>
      <td>{days}</td>
      <td className="inp serv"><input name="days" value={servicePer} onChange={(e) => setServicePer(e.target.value)} className="display" type="text" /></td>
      <td>{(Service * days).toFixed(2)}</td>
    </tr>
    <tr>
      <td></td>
      <td><strong>TOTAL</strong></td>
      <td></td>
      <td></td>
      <td></td>
      <td><strong>{(Net * days).toFixed(2)}</strong></td>
    </tr>
  </tbody>
</table>

    </div>
    </>
  );
}

export default App;
