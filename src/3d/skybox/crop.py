from PIL import Image

SIZE = 1364

image = Image.open('comfy_cafe_1k.jpg')

x-pos = image.crop((SIZE*2, SIZE, SIZE*3, SIZE*2))
x-pos.save('x-pos.jpg', quality=80)
y-pos = image.crop((SIZE*1, SIZE*0, SIZE*2, SIZE*1))
y-pos.save('y-pos.jpg', quality=80)
z-pos = image.crop((SIZE*1, SIZE, SIZE*2, SIZE*2))
z-pos.save('z-pos.jpg', quality=80)
x-neg = image.crop((SIZE*0, SIZE, SIZE*1, SIZE*2))
x-neg.save('x-neg.jpg', quality=80)
y-neg = image.crop((SIZE*1, SIZE*2, SIZE*2, SIZE*3))
y-neg.save('y-neg.jpg', quality=80)
z-neg = image.crop((SIZE*3, SIZE, SIZE*4, SIZE*2))
z-neg.save('z-neg.jpg', quality=80)
