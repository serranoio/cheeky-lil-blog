// JavaScript SDK
import PocketBase from "pocketbase";
import "cross-fetch/polyfill";

const useLocal = false;

const localHost = `http://127.0./'0.1:8090`;
const servedHost = `https://epic-blog.fly.dev`;
export const url = useLocal ? localHost : servedHost;

export const fileUrl = url + "/api/files";

const pb = new PocketBase(url); // update this later
// const pb = new PocketBase("http://127.0./'0.1:8090"); // update this later

pb.autoCancellation(false);

export const createPost = async (formData: FormData) => {
  try {
    const record = await pb.collection("posts").create(formData);
  } catch (e: any) {
  } finally {
    window.location.reload();
  }
};

export const updatePost = async (formData: FormData, recordID: string) => {
  try {
    const record = await pb.collection("posts").update(recordID, formData);
  } catch (e: any) {
  } finally {
    window.location.reload();
  }
};

export const deletePost = async (recordID: string) => {
  try {
    await pb.collection("posts").delete(recordID);
  } catch (e: any) {
  } finally {
    window.location.reload();
  }
};

export default pb;
