import React from 'react';
import LogoutHooks from './LogoutHooks';
import BingNews from './BingNews';
import "@progress/kendo-theme-default/dist/all.css";
import {Scheduler, AgendaView} from "@progress/kendo-react-scheduler";
import {sampleData, displayDate} from "../events-utc";

const Mirror = () => {
    return <div>
        <div><LogoutHooks></LogoutHooks></div>
        <div><BingNews/></div>
        <div>
            <Scheduler data={sampleData} defaultDate={displayDate}>
                <AgendaView
                    title="Compact View"
                    step={1}
                    numberOfDays={1}
                    selectedDateFormat={"From: {0:D} To: {1:D}"}
                    selectedShortDateFormat={"From: {0:d} To: {1:d}"}
                />
            </Scheduler>
        </div>
    </div>

}
export default Mirror;