import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    list: [
        {
          "name": "Элемент 1",
          "children": [
            {
              "name": "Элемент 1.1",
              "children": [
                {
                  "name": "Элемент 1.1.1"
                },
                {
                  "name": "Элемент 1.1.2"
                }
              ]
            },
            {
              "name": "Элемент 1.2"
            }
          ]
        },
        {
          "name": "Элемент 2"
        }
      ]      
}

export const treeSlice = createSlice({ 
    name: "tree",
    initialState,
    reducers: { 
        
    }
})