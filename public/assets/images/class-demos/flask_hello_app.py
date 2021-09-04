from flask import Flask
from flask_sqlalchemy import SQLAlchemy
hello_app=Flask(__name__)
hello_app.config['SQLALCHEMY_DATABASE_URI']='postgres://postgres:bahi282000@localhost:5432/test'
database=SQLAlchemy(hello_app)
class Guy(database.Model):
    __tablename__='guys'
    id=database.Column(database.Integer, primary_key=True)
    first_name=database.Column(database.String, nullable=False)
    last_name=database.Column(database.String, nullable=False)
    job=database.Column(database.String, nullable=False)
    def __repr__(self):
        return 'Id: '+str(self.id)+' first_name: '+self.first_name+' last_name: '+self.last_name+' job: '+self.job
database.create_all()

@hello_app.route('/')
def index():
    s=""
    guy=Guy.query.all()
    for i in guy:
        s+='Hello '+i.first_name+' '+i.last_name+' You are '+i.job+'<br>'
    return s
if __name__=="__main__":
    hello_app.run(debug=True)