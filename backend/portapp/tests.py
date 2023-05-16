# from django.test import TestCase

# # Create your tests here.


def fun(a):
    if a == 1:
        return 1
    elif a == 2:
        return 2
    else :
        z = (fun(a-1)+ fun(a-2))
        return z
for i in range(1,11):
    print(fun(i),end=", ") 