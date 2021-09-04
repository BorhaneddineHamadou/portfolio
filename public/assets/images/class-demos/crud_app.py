from flask import Flask, render_template, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

crud_app = Flask(__name__)
crud_app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:bahi282000@localhost:5432/borhan'

db = SQLAlchemy(crud_app)

migrate = Migrate(crud_app, db)

class Cars(db.Model):
    car_id = db.Column(db.Integer, primary_key=True)
    car_make = db.Column(db.String, nullable=False)
    car_color = db.Column(db.String, nullable=False)
    car_state = db.Column(db.Boolean, nullable=False, default=False)
    __tablename__ = 'car'

@crud_app.route('/')
def index():
    return render_template('index_crud.html', cars = Cars.query.all())    


@crud_app.route('/add_car', methods = ['POST'])
def add_car():
    car_make = request.get_json()['car_make']
    car_color = request.get_json()['car_color']

    car = Cars(car_make=car_make, car_color=car_color)
    db.session.add(car)
    db.session.commit()

    return jsonify({
        'car_id' : car.car_id,
        'car_make' : car.car_make,
        'car_color' : car.car_color
    })


@crud_app.route('/delete_car/<car_id>', methods=['DELETE'])
def delete_car(car_id):
    car = Cars.query.get(car_id)
    db.session.delete(car)
    db.session.commit()

    return jsonify({
        'success' : True
    })    