import express from "express";

const router = express.Router();

router.get("/latest", async (req, res) => {
  try {
    const channelId = "UC9sbvr5FmX9fu1VIShXMeYA";
    const url = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
    const response = await fetch(url);
    const xml = await response.text();
    res.set("Content-Type", "application/xml");
    res.send(xml);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch YouTube feed" });
  }
});

export default router;