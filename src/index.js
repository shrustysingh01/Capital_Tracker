import React from 'react';
import ReactDom from 'react-dom';

import { SpeechProvider } from '@speechly/react-client';
import { Provider } from './context/context';
import App from './App';
import './index.css'


ReactDom.render(
    <SpeechProvider appId = "4fd8c585-f2e8-4717-9e0d-7b0205182946" language = "en-US">
         <Provider>
             <App />
         </Provider>,
    </SpeechProvider>,  
    document.getElementById('root')

);