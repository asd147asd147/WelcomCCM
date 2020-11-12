import sys
count = input()
try:
    f1=open("./user1/output/"+count+".out",'r',encoding="utf8")
    a= f1.readlines()
except:
    f1=open("./user1/output/"+count+".out",'r',encoding="CP949")
    a= f1.readlines()

f2 = open("./answer/"+count+".out",'r',encoding='utf8')
b = f2.readlines()
print(a==b)