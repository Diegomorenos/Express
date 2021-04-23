import Courses from '../models/Courses'

export const createCourse = async(req, res) => {
    // res.send
    console.log(req.body)

// destruir objeto que llega a req
const {name, duration, description, available, imgUrl}=req.body

// define nuevo curso
const newCourse = new Courses({
    name,
    duration,
    description,
    available,
    imgUrl
})

const courseSaved = await newCourse.save()
res.status(201).json(courseSaved)

}

export const getCourses = async(req, res) => {
    const courses = await Courses.find();
    res.status(200).json(courses);
}

export const getCourseById = async (req, res) => {
    console.log(req)
    console.log(req.params.courseId)
    try{
        const course = await Course.findById(req.params.courseId)
    
        if(course !== null){
            res.status(200).json(course)
        }else{
            res.status(400).json({error: "El curso no existe"})
        }
    }catch(error){
        res.status(400).json(error)
    }
}

export const updateCourse = async (req, res) => {
    try {
        const updateCourse = await Course.findByIdAndUpdate(req.params.courseId, req.body, {new: true})
        console.log(updateCourse)
        if (updateCourse !== null){
            res.status(200).json(updateCourse)
        } else {
            res.status(200).json({error: "El curso no existe"})
        }
    } catch (error) {
        res.status(400).json(error)
    }
}

export const deleteCourse = async (req, res) => {
    console.log(req)
    console.log(req.params.courseId)
    try{
        const courseDeleted = await Course.findByIdAndDelete(req.params.courseId)
    
        if(courseDeleted !== null){
            res.status(200).json({msg: "Curso borrado"})
        }else{
            res.status(400).json({error: "El curso no existe"})
        }
    }catch(error){
        res.status(400).json(error)
    }
}

