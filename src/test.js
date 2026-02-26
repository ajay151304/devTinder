const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

dns.resolveSrv(
  "_mongodb._tcp.namastenode.9ictrgl.mongodb.net",
  (err, addresses) => {
    if (err) {
      console.error("DNS lookup failed:", err.message);
    } else {
      console.log("DNS resolved successfully:", addresses);
    }
  },
);
