// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { db } from "../utils/Firebase/FirebaseConfig";
// import {
//   collection,
//   addDoc,
//   getDocs,
//   doc,
//   updateDoc,
//   deleteDoc,
// } from "firebase/firestore";

// // Async thunk to add a task to Firestore
// export const addTask = createAsyncThunk("tasks/addTask", async (task) => {
//   const docRef = await addDoc(collection(db, "tasks"), task);
//   return { id: docRef.id, ...task };
// });

// // Async thunk to fetch tasks from Firestore
// export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
//   const querySnapshot = await getDocs(collection(db, "tasks"));
//   const tasks = querySnapshot.docs.map((doc) => ({
//     id: doc.id,
//     ...doc.data(),
//   }));
//   return tasks;
// });

// // Async thunk to update a task in Firestore
// export const updateTask = createAsyncThunk("tasks/updateTask", async (task) => {
//   const { id, ...data } = task;
//   const taskDocRef = doc(db, "tasks", id);
//   await updateDoc(taskDocRef, data);
//   return task;
// });

// // Async thunk to delete a task from Firestore
// export const deleteTask = createAsyncThunk(
//   "tasks/deleteTask",
//   async (taskId) => {
//     const taskDocRef = doc(db, "tasks", taskId);
//     await deleteDoc(taskDocRef);
//     return taskId;
//   }
// );
// // TaskSlice
// const tasksSlice = createSlice({
//   name: "tasks",
//   initialState: {
//     tasks: [],
//     status: "idle",
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     // Create Todo
//     builder.addCase(addTask.pending, (state) => {
//       state.status = "loading";
//     });
//     builder.addCase(addTask.fulfilled, (state, action) => {
//       state.tasks.push(action.payload);
//     });
//     builder.addCase(addTask.rejected, (state, action) => {
//       state.status = "failed";
//       state.error = action.error.message;
//     });
//     // Get Todo
//     builder.addCase(fetchTasks.pending, (state) => {
//       state.status = "loading";
//     });
//     builder.addCase(fetchTasks.fulfilled, (state, action) => {
//       state.status = "succeeded";
//       state.tasks = action.payload;
//     });
//     builder.addCase(fetchTasks.rejected, (state, action) => {
//       state.status = "failed";
//       state.error = action.error.message;
//     });
//     // Update Todo
//     builder.addCase(updateTask.pending, (state) => {
//       state.status = "loading";
//     });
//     builder.addCase(updateTask.fulfilled, (state, action) => {
//       state.status = "succeeded";
//       const index = state.tasks.findIndex(
//         (task) => task.id === action.payload.id
//       );
//       if (index !== -1) {
//         state.tasks[index] = action.payload;
//       }
//     });
//     builder.addCase(updateTask.rejected, (state, action) => {
//       state.status = "failed";
//       state.error = action.error.message;
//     });
//     // Delete Todo
//     builder.addCase(deleteTask.pending, (state) => {
//       state.status = "loading";
//     });
//     builder.addCase(deleteTask.fulfilled, (state, action) => {
//       state.status = "succeeded";
//       state.tasks = state.tasks.filter((task) => task.id !== action.payload);
//     });
//     builder.addCase(deleteTask.rejected, (state, action) => {
//       state.status = "failed";
//       state.error = action.error.message;
//     });
//   },
// });

// export default tasksSlice.reducer;

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { db } from "../utils/Firebase/FirebaseConfig";
// import {
//   collection,
//   addDoc,
//   getDocs,
//   doc,
//   updateDoc,
//   deleteDoc,
// } from "firebase/firestore";

// // Async thunk to add a task to Firestore
// export const addTask = createAsyncThunk("tasks/addTask", async (task) => {
//   const docRef = await addDoc(collection(db, "tasks"), task);
//   return { id: docRef.id, ...task };
// });

// // Async thunk to fetch tasks from Firestore
// export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
//   const querySnapshot = await getDocs(collection(db, "tasks"));
//   const tasks = querySnapshot.docs.map((doc) => ({
//     id: doc.id,
//     ...doc.data(),
//   }));
//   return tasks;
// });

// // Async thunk to update a task in Firestore
// export const updateTask = createAsyncThunk("tasks/updateTask", async (task) => {
//   const { id, ...data } = task;
//   const taskDocRef = doc(db, "tasks", id);
//   await updateDoc(taskDocRef, data);
//   return task;
// });

// // Async thunk to delete a task from Firestore
// export const deleteTask = createAsyncThunk(
//   "tasks/deleteTask",
//   async (taskId) => {
//     const taskDocRef = doc(db, "tasks", taskId);
//     await deleteDoc(taskDocRef);
//     return taskId;
//   }
// );

// // TaskSlice
// const tasksSlice = createSlice({
//   name: "tasks",
//   initialState: {
//     tasks: [],
//     status: "idle",
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     // Create Todo
//     builder.addCase(addTask.pending, (state) => {
//       state.status = "loading";
//     });
//     builder.addCase(addTask.fulfilled, (state, action) => {
//       state.status = "succeeded";
//       state.tasks.push(action.payload);
//     });
//     builder.addCase(addTask.rejected, (state, action) => {
//       state.status = "failed";
//       state.error = action.error.message;
//     });
//     // Get Todo
//     builder.addCase(fetchTasks.pending, (state) => {
//       state.status = "loading";
//     });
//     builder.addCase(fetchTasks.fulfilled, (state, action) => {
//       state.status = "succeeded";
//       state.tasks = action.payload.filter(
//         (task, index, self) =>
//           index === self.findIndex((t) => t.id === task.id)
//       );
//     });
//     builder.addCase(fetchTasks.rejected, (state, action) => {
//       state.status = "failed";
//       state.error = action.error.message;
//     });
//     // Update Todo
//     builder.addCase(updateTask.pending, (state) => {
//       state.status = "loading";
//     });
//     builder.addCase(updateTask.fulfilled, (state, action) => {
//       state.status = "succeeded";
//       const index = state.tasks.findIndex(
//         (task) => task.id === action.payload.id
//       );
//       if (index !== -1) {
//         state.tasks[index] = action.payload;
//       }
//     });
//     builder.addCase(updateTask.rejected, (state, action) => {
//       state.status = "failed";
//       state.error = action.error.message;
//     });
//     // Delete Todo
//     builder.addCase(deleteTask.pending, (state) => {
//       state.status = "loading";
//     });
//     builder.addCase(deleteTask.fulfilled, (state, action) => {
//       state.status = "succeeded";
//       state.tasks = state.tasks.filter((task) => task.id !== action.payload);
//     });
//     builder.addCase(deleteTask.rejected, (state, action) => {
//       state.status = "failed";
//       state.error = action.error.message;
//     });
//   },
// });

// export default tasksSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../utils/Firebase/FirebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

// Async thunk to add a task to Firestore
export const addTask = createAsyncThunk("tasks/addTask", async (task) => {
  const docRef = await addDoc(collection(db, "tasks"), task);
  return { id: docRef.id, ...task };
});

// Async thunk to fetch tasks from Firestore
export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const querySnapshot = await getDocs(collection(db, "tasks"));
  const tasks = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return tasks;
});

// Async thunk to update a task in Firestore
export const updateTask = createAsyncThunk("tasks/updateTask", async (task) => {
  const { id, ...data } = task;
  const taskDocRef = doc(db, "tasks", id);
  await updateDoc(taskDocRef, data);
  return task;
});

// Async thunk to delete a task from Firestore
export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (taskId) => {
    const taskDocRef = doc(db, "tasks", taskId);
    await deleteDoc(taskDocRef);
    return taskId;
  }
);

// TaskSlice
const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Create Todo
    builder.addCase(addTask.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(addTask.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.tasks.push(action.payload);
    });
    builder.addCase(addTask.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
    // Get Todo
    builder.addCase(fetchTasks.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.tasks = action.payload.filter(
        (task, index, self) => index === self.findIndex((t) => t.id === task.id)
      );
    });
    builder.addCase(fetchTasks.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
    // Update Todo
    builder.addCase(updateTask.pending, (state) => {
      state.status = "loading";
    });
    // builder.addCase(updateTask.fulfilled, (state, action) => {
    //   state.status = "succeeded";
    //   const index = state.tasks.findIndex(
    //     (task) => task.id === action.payload.id
    //   );
    //   if (index !== -1) {
    //     state.tasks[index] = action.payload;
    //   }
    // });

    builder.addCase(updateTask.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
    // Delete Todo
    builder.addCase(deleteTask.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(deleteTask.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    });
    builder.addCase(deleteTask.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export default tasksSlice.reducer;
