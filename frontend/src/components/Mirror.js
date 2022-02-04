import React from 'react';
import LogoutHooks from './LogoutHooks';
import BingNews from './BingNews';
import Temp from './Temp';
import "@progress/kendo-theme-default/dist/all.css";
import {Scheduler, AgendaView} from "@progress/kendo-react-scheduler";
import {sampleData, displayDate} from "../events-utc";
import AudioPlayer from './AudioPlayer';

const Mirror = () => {
    return <div id="ContentMirror">
        <div id="Logout">
            <LogoutHooks/>
        </div>
        <div id="Date-Temp-Logout">
            <div id="Calendar">
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

            <div id="Temp-Date">
                <div>
                    <h1>Friday 04 2022 </h1>
                    <h1>19 : 22 : 40</h1>
                </div>
                <div id="Temperature">
                    <p>Température : 23 C°</p>
                    <p>Humidity : 89 %</p>
                    {/*<Temp/>*/}
                </div>
            </div>

        </div>

        <div id="Music-News">

            <div id="musique">
                <AudioPlayer />
            </div>

            <div id="NewsContent">
                <h1>Les derniers news</h1>
                <BingNews/>
            </div>

        </div>

    </div>

}
export default Mirror;