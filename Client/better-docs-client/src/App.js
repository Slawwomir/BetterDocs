import React, {useState, useEffect} from "react";
import './App.css';
import * as signalR from '@microsoft/signalr';

const App = () => {

    const [text, setText] = useState("");
    const [title, setTitle] = useState("");

    useEffect(() => {
            const hubConnection = new signalR.HubConnectionBuilder()
                .withUrl("http://localhost:5000/hub")
                .build();
      
            hubConnection
                .start()
                .then(() =>
                    hubConnection
                        .invoke("GetDocument", 1)
                        .then(document => {
                            setText(document.textContent);
                            setTitle(document.title);
                        })
                )
        }
    );

    return (
        <div className="App">
            <header className="App-header">
                Title: <p>{title}</p>
                Content: <p>{text}</p>
            </header>
        </div>
    );
};

export default App;
