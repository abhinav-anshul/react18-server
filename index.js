import express from "express"
import React from "react"
import { renderToPipeableStream } from "react-dom/server"

const app = express()

app.get("/", (req, res) => {
  const { pipe } = renderToPipeableStream(`<h1>Hello world</h1>`, {
    onShellReady() {
      res.setHeader("content-type", "text/html")
      pipe(res)
    },
  })
})

app.listen(3000, () => {
  console.log("RUNNING..")
})
