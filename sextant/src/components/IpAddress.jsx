import { useState } from "react";
import axios from "axios";

const IpAddress = () => {
  const [ipv4, setIpv4] = useState("");
  const [ipv6, setIpv6] = useState("");
  const getIp = async (e) => {
    e.preventDefault();
    try {
      axios.get("https://api.ipify.org").then((res) => {
        console.log(res.data);
        setIpv4(res.data);
      });
      axios.get("https://api64.ipify.org").then((res) => {
        console.log(res.data);
        setIpv6(res.data);
      });
    } catch (error) {}
  };
  return (
    <div className="IP">
      <form>
        <div>
          <label htmlFor="ipv4">IPv4</label>
          <input
            type="text"
            value={ipv4}
            onChange={(e) => setIpv4(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="ipv6">IPv6</label>
          <input
            type="text"
            value={ipv6}
            onChange={(e) => setIpv6(e.target.value)}
          />
        </div>
        <button onClick={getIp}>Get IP Address</button>
      </form>
    </div>
  );
};
export default IpAddress;
