import React, { useState } from "react";
const tabs = [
  { id: "home", label: "Home", content: "Welcome to the Home tab!" },
  { id: "profile", label: "Profile", content: "This is your Profile." },
  { id: "settings", label: "Settings", content: "Adjust your Settings here." },
];

const TabSwitcher = () => {

    const [activeTab, setActiveTab] = useState("home");
    return (
        <div className="tab-container">
            <h1>Tab Switcher</h1>
            <div className="tab-buttons">
               {tabs.map((tab)=> (
                <button key={tab.id} className={activeTab === tab.id ? "active" : ""} onClick={() => setActiveTab(tab.id)}>{tab.label}</button>
               ))}
            </div>
            <div className="tab-content">
               {tabs.find((tab) => activeTab === tab.id)?.content}
            </div>
        </div>

    )
}
export default TabSwitcher;