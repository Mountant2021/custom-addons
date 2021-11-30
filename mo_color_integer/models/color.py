from odoo import models, fields

class Color(models.Model):
    _name = 'color'
    _description = 'Color'

    name = fields.Char(string='Name', required=True)
    color = fields.Integer(string='Color')
