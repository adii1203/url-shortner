import { createSlice } from "@reduxjs/toolkit";
import { fetchUserLinks } from "../actions/authActions";
import { creatLink } from "../actions/linkActions";

const initialState = {
  userLinks: [
    // {
    //   _id: "658bae5fefa277c0534b2dfb",
    //   key: "b8ba6577",
    //   originUrl: "https://figma.com",
    //   user: "6585b19371068fd9bc22050b",
    //   clicks: 0,
    //   isActive: true,
    //   icon: "https://static.figma.com/app/icon/1/icon-192.png",
    //   image:
    //     "https://cdn.sanity.io/images/599r6htc/localized/a9afeb156fd9d624032026…",
    //   title: "Figma: The Collaborative Interface Design Tool",
    //   description:
    //     "Figma is the leading collaborative design tool for building meaningful…",
    // },
    // {
    //   _id: "658bbff",
    //   key: "9f5300be",
    //   originUrl: "https://www.devui.io/components/inputs",
    //   user: { $oid: "6585b19371068fd9bc22050b" },
    //   clicks: "0",
    //   isActive: true,
    //   icon: "https://www.devui.io/images/apple-touch-icon.png",
    //   image: "",
    //   title: "DevUI",
    //   description: "An tailwind css component library.",
    // },
    // {
    //   _id: "6e5fefa27734b2dfb",
    //   key: "b8ba6577",
    //   originUrl: "https://figma.com",
    //   user: "6585b19371068fd9bc22050b",
    //   clicks: 0,
    //   isActive: true,
    //   icon: "https://static.figma.com/app/icon/1/icon-192.png",
    //   image:
    //     "https://cdn.sanity.io/images/599r6htc/localized/a9afeb156fd9d624032026…",
    //   title: "Figma: The Collaborative Interface Design Tool",
    //   description:
    //     "Figma is the leading collaborative design tool for building meaningful…",
    // },
    // {
    //   _id: { $oid: "77c0534b2e3c" },
    //   key: "9f5300be",
    //   originUrl: "https://www.devui.io/components/inputs",
    //   user: { $oid: "6585b19371068fd9bc22050b" },
    //   clicks: "0",
    //   isActive: true,
    //   icon: "https://www.devui.io/images/apple-touch-icon.png",
    //   image: "",
    //   title: "DevUI",
    //   description: "An tailwind css component library.",
    // },
    // {
    //   _id: "658f0efgshhsjaae3c",
    //   key: "9f5300be",
    //   originUrl: "https://www.devui.io/components/inputs",
    //   user: { $oid: "6585b19371068fd9bc22050b" },
    //   clicks: "0",
    //   isActive: true,
    //   icon: "https://www.devui.io/images/apple-touch-icon.png",
    //   image: "",
    //   title: "DevUI",
    //   description: "An tailwind css component library.",
    // },
    // {
    //   _id: "65277csgtryus0534b2e3c",
    //   key: "9f5300be",
    //   originUrl: "https://www.devui.io/components/inputs",
    //   user: { $oid: "6585b19371068fd9bc22050b" },
    //   clicks: "0",
    //   isActive: true,
    //   icon: "https://www.devui.io/images/apple-touch-icon.png",
    //   image: "",
    //   title: "DevUI",
    //   description: "An tailwind css component library.",
    // },
    // {
    //   _id: "7csgtryus0534b2e3c",
    //   key: "9f5300be",
    //   originUrl: "https://www.devui.io/components/inputs",
    //   user: { $oid: "6585b19371068fd9bc22050b" },
    //   clicks: "0",
    //   isActive: true,
    //   icon: "https://www.devui.io/images/apple-touch-icon.png",
    //   image: "",
    //   title: "DevUI",
    //   description: "An tailwind css component library.",
    // },
    // {
    //   _id: "7csgtr2e3c",
    //   key: "9f5300be",
    //   originUrl: "https://www.devui.io/components/inputs",
    //   user: { $oid: "6585b19371068fd9bc22050b" },
    //   clicks: "0",
    //   isActive: true,
    //   icon: "https://www.devui.io/images/apple-touch-icon.png",
    //   image: "",
    //   title: "DevUI",
    //   description: "An tailwind css component library.",
    // },
    // {
    //   _id: "5fefa20534b2dfb",
    //   key: "b8ba6577",
    //   originUrl: "https://figma.com",
    //   user: "6585b19371068fd9bc22050b",
    //   clicks: 0,
    //   isActive: true,
    //   icon: "https://static.figma.com/app/icon/1/icon-192.png",
    //   image:
    //     "https://cdn.sanity.io/images/599r6htc/localized/a9afeb156fd9d624032026…",
    //   title: "Figma: The Collaborative Interface Design Tool",
    //   description:
    //     "Figma is the leading collaborative design tool for building meaningful…",
    // },
    // {
    //   _id: "5fefa277c0534b2dfb",
    //   key: "b8ba6577",
    //   originUrl: "https://figma.com",
    //   user: "6585b19371068fd9bc22050b",
    //   clicks: 0,
    //   isActive: true,
    //   icon: "https://static.figma.com/app/icon/1/icon-192.png",
    //   image:
    //     "https://cdn.sanity.io/images/599r6htc/localized/a9afeb156fd9d624032026…",
    //   title: "Figma: The Collaborative Interface Design Tool",
    //   description:
    //     "Figma is the leading collaborative design tool for building meaningful…",
    // },
  ],
  loading: null,
  isSaving: null,
  saveingError: null,
};

const linkSlice = createSlice({
  name: "userLinks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserLinks.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUserLinks.fulfilled, (state, { payload }) => {
      console.log(payload);
      state.userLinks = payload.data.links;
      state.loading = false;
    });
    builder.addCase(creatLink.fulfilled, (state, { payload }) => {
      state.isSaving = false;
      state.userLinks = [...state.userLinks, payload.data];
    });
    builder.addCase(creatLink.pending, (state) => {
      state.isSaving = true;
    });
    builder.addCase(creatLink.rejected, (state, action) => {
      // console.log(action);
      state.saveingError = "error";
      state.isSaving = false;
    });
  },
});

export default linkSlice.reducer;
