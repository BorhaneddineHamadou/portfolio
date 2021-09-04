import psycopg2
connect = psycopg2.connect("dbname=test user=postgres password=bahi282000")
cursor = connect.cursor()
cursor.execute("DROP TABLE IF EXISTS try_table")
cursor.execute("""CREATE TABLE IF NOT EXISTS students(
                   id BIGSERIAL PRIMARY KEY,
                   first_name VARCHAR NOT NULL,
                   last_name VARCHAR NOT NULL,
                   date_of_birth DATE NOT NULL
);""")

cursor.execute("INSERT INTO students (first_name, last_name, date_of_birth) VALUES ('Borhaneddine', 'Hamadou',DATE'2000-08-02');")
cursor.execute("INSERT INTO students (first_name, last_name, date_of_birth) VALUES (%s, %s, %s);", ('Slimane', 'Arbaoui', '2000-08-26'))
cursor.execute("INSERT INTO students (first_name, last_name, date_of_birth) VALUES (%(first_name)s, %(last_name)s, %(date_of_birth)s);", {
    'first_name':'Akram',
    'last_name':'Bensalem',
    'date_of_birth':'2000-04-23'
})
connect.commit()
cursor.execute("SELECT * FROM students;")
result = cursor.fetchone()
while result:
    print(result)
    result=cursor.fetchone()
cursor.close()
connect.close()

