const { matchedData, body } = require('express-validator');
const { tracksModel } = require('../models')
const { handleHttpError } = require('../utils/handleError')

/**
 * Obtener lista
 * @param {*} req 
 * @param {*} res 
 */

const getItems = async (req, res) => {
    try {
        const data = await tracksModel.find({});
        res.send({ data })
    } catch (e) {
        handleHttpError(res, 'ERROR GET ITEMS')
    }
}

/**
 * Obtener un detalle
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async (req, res) => {
    try {
        req = matchedData(req);
        const { id } = req;
        const data = await tracksModel.findById(id);
        res.send({ data })
    } catch (e) {
        handleHttpError(res, 'ERROR GET ITEM')
    }
}

/**
 * Insertar un registro
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) => {
    try {
        const body = matchedData(req)
        const data = await tracksModel.create(body)
        res.send({ data })
    } catch (e) {
        handleHttpError(res, 'ERROR CREATE ITEMS')
    }
}

/**
 * Actualizar un registro
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = async (req, res) => {
    try {
        const { id, ...body } = matchedData(req);
        const data = await tracksModel.findOneAndUpdate(id, body, {
            new: true,
        });
        res.send({ data });
    } catch (e) {
        handleHttpError(res, 'ERROR UPDATE ITEMS')
    }
}

/**
 * Eliminar un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = async (req, res) => {
    try {
        req = matchedData(req);
        const { id } = req;
        const data = await tracksModel.softDeleteById({ _id: id});
        res.send({ data })
    } catch (e) {
        handleHttpError(res, 'ERROR DELETE ITEM')
    }
}

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };