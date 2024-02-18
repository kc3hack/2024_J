from PIL import Image

SIZE = 1364

image = Image.open('kloppenheim_05_puresky.jpg')

x_pos = image.crop((SIZE*2, SIZE, SIZE*3, SIZE*2))
x_pos.save('x-pos.jpg', quality=80)
y_pos = image.crop((SIZE*1, SIZE*0, SIZE*2, SIZE*1))
y_pos.save('y-pos.jpg', quality=80)
z_pos = image.crop((SIZE*1, SIZE, SIZE*2, SIZE*2))
z_pos.save('z-pos.jpg', quality=80)
x_neg = image.crop((SIZE*0, SIZE, SIZE*1, SIZE*2))
x_neg.save('x-neg.jpg', quality=80)
y_neg = image.crop((SIZE*1, SIZE*2, SIZE*2, SIZE*3))
y_neg.save('y-neg.jpg', quality=80)
z_neg = image.crop((SIZE*3, SIZE, SIZE*4, SIZE*2))
z_neg.save('z-neg.jpg', quality=80)
