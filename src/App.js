import { Button } from 'bootstrap';
import './App.css';

export default function App() {
  return (
    <div className="App">
      {/* <Greeting /> */}
      <Details
      pack="FREE"
      rate="$0/month"
        
        c1="✔ Single User"
        c2="✔ 5GB Storage"
        c3="✔ Unlimited public projects"
        c4="✔ Community Access"
        c5="❌ Unlimited Private Projects"
        c6="❌ Dedicated Phone Support"
        c7="❌ Free Subdomain"
        c8="❌ Month status Report" 

        c9={Button}

        
        ></Details>
      <Details
      pack="PLUS"
      rate="$9/month"
      
        c1="✔ 5 User"
        c2="✔ 50GB Storage"
        c3="✔ Unlimited public projects"
        c4="✔ Community Access"
        c5="✔ Unlimited Private Projects"
        c6="✔ Dedicated Phone Support"
        c7="✔ Free Subdomain"
        c8="❌ Month status Report"
        c9={Button}
      />
      <Details
      pack="PRO"
      rate="$49/month"
      
        c1="✔ Unlimited User"
        c2="✔ 150GB Storage"
        c3="✔ Unlimited public projects"
        c4="✔ Community Access"
        c5="✔ Unlimited Private Projects"
        c6="✔ Dedicated Phone Support"
        c7="✔ Unlimited Free Subdomain"
        c8="✔ Month status Report"
        c9={Button}
      
      />
    </div>
  );
}
function Details(props) {
  const checkOpacity = (content) => {
    return content.includes("❌") ? 0.5 : 1;
    
  };

  return (
    <div className="card">
      <div className="top">
        <h4 style={{ opacity: 0.5 }}>{props.pack}</h4>
        <h2>{props.rate}</h2>
      </div>
      <div>
        <p>
          <p>
            <span style={{ opacity: checkOpacity(props.c1) } }>{props.c1}</span>
          </p>
          <p>
            <span style={{ opacity: checkOpacity(props.c2) }}>{props.c2}</span>
          </p>
          <p>
            <span style={{ opacity: checkOpacity(props.c3) }}>{props.c3}</span>
          </p>
          <p>
            <span style={{ opacity: checkOpacity(props.c4) }}>{props.c4}</span>
          </p>
          <p>
            <span style={{ opacity: checkOpacity(props.c5) }}>{props.c5}</span>
          </p>
          <p>
            <span style={{ opacity: checkOpacity(props.c6) }}>{props.c6}</span>
          </p>
          <p>
            <span style={{ opacity: checkOpacity(props.c7) }}>{props.c7}</span>
          </p>
          <p>
            <span style={{ opacity: checkOpacity(props.c8) }}>{props.c8}</span>
          </p>
        </p>
      </div>
      <button className="but">Button</button>
    </div>
  );
}

