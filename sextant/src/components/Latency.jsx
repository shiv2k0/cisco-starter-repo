import { useEffect, useState } from "react";

const Latency = () => {
  const [timestamp, setTimestamp] = useState("");

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:55455");
    socket.addEventListener("message", ({ data }) => {
      setTimestamp(data);
    });
  }, []);

  return (
    <div className="Latency">
      <div>
        <span>Latency :</span> {new Date().getTime() - timestamp} ms
      </div>
    </div>
  );
};
export default Latency;
