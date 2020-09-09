def foo(i):
    if i<=3:
        return i>1
    elif i %2 ==0:
        return "False 2" 
    elif i %3 ==0:
        return"False 3"
    j = 5
    while j**2 <=i:
        if i%j==0:
            return f"False 前者 {j}"
        elif i%(j+2)==0:
            f"False 后者 {j+2}"
        j+=6
    return True

print(foo(49))
