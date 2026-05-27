import { useState } from "react";
import {Timer, Hourglass} from 'lucide-react'
import { useEffect } from "react";

const Stopwatch = ({ active }) => (
  <Timer/>
);

const TimerIcon = ({ active }) => (
  <Hourglass/>
);

function StopwatchTab() {
  return (
    <>
      <h1 className="text-xl text-center text-white px-4">
        Hi
      </h1>
    </>
  );
}


function TimerTab() {
  return (
    <h1 className="text-xl text-center text-white">profile</h1>
  );
}


export default function MobileTabScreen() {
  const [activeTab, setActiveTab] = useState("stopwatch");
  
  const [date, setDate] = useState(new Date())


  useEffect(()=> {
    const timeInterval = setInterval(()=>{
      setDate(new Date())
    }, 1000)

    return () => clearInterval(timeInterval)
  },[])

  const formatTime = (time) => {
    return time.toString().padStart(2, "0")
  }


  const tabs = [
    { id: "stopwatch", label: "Stopwatch", Icon: Stopwatch },
    { id: "timer", label: "Timer", Icon: TimerIcon },
  ];

  return (
    <div className="flex justify-center min-h-screen bg-zinc-950 py-6 sm:items-center">
      {/* Phone shell */}
      <div className="relative flex flex-col bg-zinc-900 overflow-hidden border border-zinc-400/20 w-104 h-[85vh] max-h-225 min-h-150 lg:min-h-160 lg:max-w-96 rounded-4xl shadow-[0_40px_120px_rgba(0,0,0,0.7)]"
      >
        {/* Status bar */}
        <div className="flex justify-between items-center px-8 pt-4 pb-1 shrink-0">
          <span className="text-xs font-semibold text-zinc-300 pr-8">{date.getHours()}:{formatTime(date.getMinutes())}</span>
          <div className="w-28 h-7 bg-zinc-950 rounded-full border border-zinc-400/20" />
          <div className="flex gap-1.5 items-center">
            <div className="flex gap-0.5 items-end h-3">
              {[2, 3, 4, 5].map((h, i) => (
                <div key={i} className="w-1 bg-zinc-300 rounded-sm" style={{ height: h * 3 }} />
              ))}
            </div>
            <svg className="w-4 h-4 text-zinc-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 00-6 0zm-4-4l2 2a7.074 7.074 0 0110 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
            </svg>
            <svg className="w-5 h-3 text-zinc-300" viewBox="0 0 20 12" fill="none">
              <rect x="0.5" y="0.5" width="16" height="11" rx="3.5" stroke="currentColor" strokeOpacity="0.4" />
              <rect x="2" y="2" width="11" height="8" rx="2" fill="currentColor" />
              <path d="M17.5 4v4a2 2 0 000-4z" fill="currentColor" fillOpacity="0.4" />
            </svg>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-none">
          {activeTab === "stopwatch" ? <StopwatchTab /> : <TimerTab />}
        </div>

        <div
          className="shrink-0 bg-zinc-900/95 backdrop-blur-md border-t border-zinc-800/80 "
        >
          <div className="flex">
            {tabs.map(({ id, label, Icon }) => {
              const active = activeTab === id;
              return (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`flex-1 flex flex-col items-center gap-1 pt-3 pb-1 transition-all duration-200 active:scale-95 ${
                    active ? "text-white" : "text-zinc-500 hover:text-zinc-400"
                  }`}
                >
                  <Icon active={active} />
                  <span className="text-[10px] font-semibold tracking-wide">{label}</span>

                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}