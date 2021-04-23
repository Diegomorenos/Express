import {Router} from 'express'

const router = Router()

import * as courseController from '../controllers/course.controller'

router.post('/crear', courseController.createCourse)
router.get('/listar', courseController.getCourses)
router.get('/listarUno/:courseId', courseController.getCourseById)
router.put('/actualizar/:courseId', courseController.updateCourse)
router.delete('/eliminar/:courseId', courseController.getCourses)

export default router