import { rest } from 'msw'
import json from './openapi.json'

const paths = Object.keys(json.paths);
console.log("paths", paths);

export const handlers = [
  rest.post(paths[0], (req, res, ctx) => {
    const name = json.paths[paths[0]].get.responses["200"].content["application/json"].examples[0].name
    return res(
      ctx.json([
        { id: "", name, tag: "" },
        { id: "", name, tag: "" },
      ]),
    )
  }),
]
