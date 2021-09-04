from flask import Flask, render_template, request, redirect, url_for, jsonify
from flask_sqlalchemy import SQLAlchemy 

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:bahi282000@localhost:5432/borhan'
db = SQLAlchemy(app)


class Person(db.Model):
    person_id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    __tablename__ = 'person'
    def __repr__(self):
        return f'<ID : {self.person_id} , NAME : {self.name}>'

db.create_all()

@app.route('/')
def index(): 
    return render_template('index.html', infos = Person.query.all())

@app.route('/add_person', methods=['POST'])
def add_person():
    name = request.get_json()['name']
    person = Person(name = name)
    db.session.add(person)
    db.session.commit()
    return jsonify({
        'name' : person.name,
        'person_id' : person.person_id
    })

@app.route('/delete/<person_id>', methods=['DELETE'])
def delete(person_id):
    person = Person.query.get(person_id)
    db.session.delete(person) 
    db.session.commit()
    return jsonify({
        'success' : True
    })    