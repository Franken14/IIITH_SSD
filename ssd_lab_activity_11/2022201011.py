import csv

listi = []
columns = []

#1st part
file_loc = input("Enter the location of the file: ")
with open(file_loc, 'r') as f:
    csvreader = csv.reader(f, delimiter=',')
    c = 0
    for row in csvreader:
        length = len(row)
        length -= 6
        if c == 0:
            count = 0
            for i in row:
                if count>= length:
                    break
                columns.append(i)
            c += 1
            continue
        count = 0
        listi.append(row[:length])



#2nd part
listi2 = []
temp = []
for i in listi:
    for j in i:
        j = str(j)
        j = j.replace(',','')
        flag = 0
        temp.append(j)
    listi2.append(temp[:])
    temp.clear()


#3rd part
listi2 = list(filter(lambda i: float(i[6]) > -3, listi2))

opening = list(map(lambda x: float(x[1]), listi2))
x = 0
higher = list(map(lambda x: float(x[2]), listi2))
lower = list(map(lambda x: float(x[3]), listi2))

a = sum(opening)/len(opening)
b = sum(higher)/len(higher)
c = sum(lower)/len(lower)

charac = ""
while len(charac) != 1:
    charac = input("Enter character: ")
listi.clear()
for i in listi2:
    if i[0][0] == charac:
        listi.append(i)

file = open('stock_output.txt','w')

count = 0
for i in listi:
    for j in i:
        file.write(str(j))
        file.write(" ")
    file.write('\n')
    count += 1
file.close()

file2 = open('avg_output.txt','w')

file2.write(str(a))
file2.write("\n")
file2.write(str(b))
file2.write("\n")
file2.write(str(c))
file2.write("\n")
file2.close()







