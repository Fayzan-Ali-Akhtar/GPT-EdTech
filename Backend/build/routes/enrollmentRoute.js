"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const { getCoursesForUser } = require('../controllers/enrollmentController');
// Route to get courses for a user
router.post('/courses', getCoursesForUser);
module.exports = router;
