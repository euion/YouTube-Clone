const express = require("express");
const router = express.Router();
const multer = require("multer");
var ffmpeg = require("fluent-ffmpeg");

const { Video } = require("../models/Video");
const { Subscriber } = require("../models/Subscriber");
const { auth } = require("../middleware/auth");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const fileFilter = (req, file, cb) => {
  // mime type 체크하여 원하는 타입만 필터링

  if (file.mimetype == "video/mp4") {
    cb(null, true);
  } else {
    cb({ msg: "mp4 파일만 업로드 가능합니다." }, false);
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter }).single(
  "file"
);

//=================================

// Video

//=================================

router.post("/uploadfiles", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.json({ success: false, err });
    } else {
      return res.json({
        success: true,
        filePath: res.req.file.path,
        fileName: res.req.file.filename,
      });
    }
  });
});

router.post("/thumbnail", (req, res) => {
  //썸네일 생성하고 비디오 러닝타임도 가져오기

  let filePath = "";
  let fileDuration = "";

  //비디오 정보 가져오기
  ffmpeg.ffprobe(req.body.rul, function (err, metadata) {
    console.dir(metadata);
    console.log(metadata.format.duration);
    fileDuration = metadata.format.duration;
  });

  //썸네일 생성
  ffmpeg(req.body.url) // 클라이언트에서 온 비디오 저장 경로
    .on("filenames", function (filenames) {
      console.log("Will generate" + filenames.josin(", "));
      console.log(filenames);

      filePath = "uploads/thumbnails/" + filenames[0];
    })
    .on("end", function () {
      console.log("썸네일 생성");
      return res.json({
        success: true,
        url: filePath,
        fileDuration: fileDuration,
      });
    })
    .on("error", function (err) {
      console.error(err);
      return res.json({ success: false, err });
    })
    .screenshots({
      count: 3,
      folder: "uploads/thumnails",
      size: "320x240",
      filename: "thumbnail-%b.png", // file 원래 이름 저장
    });
});

module.exports = router;
