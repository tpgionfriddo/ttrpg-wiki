import * as functions from "firebase-functions";
import * as express from "express";
import { initializeApp } from "firebase-admin/app";
import {getFirestore} from "firebase-admin/firestore";

initializeApp();

const db = getFirestore();
const app = express();


app.get("api/page/:pageTitle", async (req:any, res:any) => {
  // const title = req.params["pageTitle"];

  // const page = await db.collection("Pages").doc(title).get();
  // const pageData = page.data();

  // console.log(pageData);


  // res.send(pageData);
  res.send("e");
});

 


exports.app = functions.https.onRequest(app);
