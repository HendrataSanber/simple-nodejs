import express, { Request, Response } from "express";
import multer from 'multer';//npm install @types/multer
import cloudinary from 'cloudinary';
const upload = multer({ dest: './uploads/' });
const PORT = 3000;
var allresult:any;

function init() {
  const app = express();
  app.use(express.json());
  cloudinary.v2.config({ 
    cloud_name: 'dhoueqiv2', 
    api_key: '944659878849711', 
    api_secret: 'JLzEblgGoGFcvKPLu2xz_PScDuY',
  });

  app.post("/upload", upload.single('file'), (req, res) => {
    const photo=req.file;
    console.log(photo);
    if (!photo) {
      res.status(400).json({ status: 400, message: "Photo is required" });
    }
    const filepath=req.file?.path?req.file?.path:'';
    const publicid=req.file?.filename;

    const uploadResult = cloudinary.v2.uploader
    .upload(
        filepath, {
            public_id: publicid,
        },
        (error,result)=>{
          if (error) {
            res.status(500).json({ status: 500, message: "upload failed", error });
          } else {
            res.json({ status: 200, message: "Success", result });
          }
        }
    )
    .catch((error) => {
        console.log(error);
    });
  });

  app.post("/uploadmany", upload.array('file',10), (req, res) => {
    const photos=req.files as Express.Multer.File[];

    allresult=[];
    // async function setTimeoutExample() {
    //   await new Promise(resolve => setTimeout(resolve, 3000));
    //   console.log("Hello, world!");
    // }

    async function uploadfiles(){
      const finalresult = await Promise.all(photos.map(async element => {
        const filepath=element.path;
        const publicid=element.filename;

        const uploadResult = await cloudinary.v2.uploader
        .upload(
            filepath, {
                public_id: publicid,
            },
            (error,result)=>{
              if (error) {
                res.status(500).json({ status: 500, message: "upload failed", error });
              } else {
                allresult.push(result);
                // res.json({ status: 200, message: "Success", result });
              }
            }
          )
          .catch((error) => {
            console.log(error);
          });
        }));
        res.json({ status: 200, message: "Success", allresult });
      }
      uploadfiles();

  });
  
  app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
      message: "OK",
      data: null,
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

init();
