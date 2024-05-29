import React from 'react'
import EmployeeList from "./EmployeeList.jsx"
import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('content'))
root.render(
    <React.StrictMode>
        <EmployeeList />
    </React.StrictMode>
)