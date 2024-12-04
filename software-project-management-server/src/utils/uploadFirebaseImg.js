import { firebaseStorage } from "../config/firebaseApp.js";
import { uploadBytesResumable, ref, getDownloadURL } from "firebase/storage";

const uploadImg = async (img, path, name) => {
    try {
        const extension = img.originalname.slice(img.originalname.lastIndexOf(".")); // Extract from last dot

        const storageRef = ref(firebaseStorage, `${path}/${name + extension}`);
        let contentType = "image/jpeg";
        if (extension === ".svg" || extension === ".svgz") {
            contentType = "image/svg+xml";
        }
        const metadata = { contentType };
        const snapshot = await uploadBytesResumable(storageRef, img.buffer, metadata);

        const downloadURL = await getDownloadURL(snapshot.ref);
        return downloadURL;
    } catch (error) {
        throw error;
    }
};

export default uploadImg;
