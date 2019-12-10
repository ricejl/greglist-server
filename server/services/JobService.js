import mongoose from "mongoose";
import Job from "../models/Job";
import ApiError from "../utils/ApiError";

const _repository = mongoose.model("Job", Job);
class JobService {
  async getAll() {
    return await _repository.find({});
  }

  async getById() {
    return await _;
  }
}

let jobService = new JobService();
export default jobService;
