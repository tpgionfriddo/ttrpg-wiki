import * as functions from "firebase-functions";
import * as express from "express";
import * as bodyParser from "body-parser";
import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import * as path from "path";

initializeApp();

const db = getFirestore();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));


app.get("/api/page/:pageTitle", async (req: any, res: any) => {
  const title = req.params["pageTitle"];

  const page = await db.collection("Pages").doc(title).get();
  const pageData = page.data();

  res.json(pageData);
});

app.post("/api/page/:pageTitle", async (req: any, res: any) => {
  const title = req.params["pageTitle"];
  const docRef = db.collection("Pages").doc(title);
  const body = req.body;
  await docRef.set({
    title: title,
    content: body["content"],
  });
  res.send("Data Received: " + JSON.stringify(body));
});


exports.app = functions.https.onRequest(app);
