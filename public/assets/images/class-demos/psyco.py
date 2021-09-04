import psycopg2

conn = psycopg2.connect("dbname=borhan user=postgres password=bahi282000")

cur = conn.cursor()

cur.execute("SELECT * FROM student")

result1 = cur.fetchmany(1)
result2 = cur.fetchone()
print(result1, result2)

conn.commit()
cur.close()