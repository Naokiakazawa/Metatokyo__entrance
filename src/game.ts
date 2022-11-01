import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../b88efbbf-2a9a-47b4-86e1-e38ecc2b433b/src/item"
import Script2 from "../7d669c08-c354-45e4-b3a3-c915c8fd6b6e/src/item"
import Script3 from "../a747f104-5434-42a8-a543-8739c24cf253/src/item"
import Script4 from "../ab84996d-dcdc-429c-818e-a7640239c803/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("6b33f46e-9667-45e5-bd90-85f372ee2490/CityTile.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const entity2 = new Entity('entity2')
engine.addEntity(entity2)
entity2.setParent(_scene)
entity2.addComponentOrReplace(gltfShape)
const transform3 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity2.addComponentOrReplace(transform3)

const entity3 = new Entity('entity3')
engine.addEntity(entity3)
entity3.setParent(_scene)
entity3.addComponentOrReplace(gltfShape)
const transform4 = new Transform({
  position: new Vector3(8, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity3.addComponentOrReplace(transform4)

const entity4 = new Entity('entity4')
engine.addEntity(entity4)
entity4.setParent(_scene)
entity4.addComponentOrReplace(gltfShape)
const transform5 = new Transform({
  position: new Vector3(8, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity4.addComponentOrReplace(transform5)

const externalLink = new Entity('externalLink')
engine.addEntity(externalLink)
externalLink.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(12.561955451965332, 1.160528540611267, 3.473731756210327),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000019073486328, 1, 1.0000019073486328)
})
externalLink.addComponentOrReplace(transform6)

const ent = new Entity('ent')
engine.addEntity(ent)
ent.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(0.2797394394874573, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ent.addComponentOrReplace(transform7)
const gltfShape2 = new GLTFShape("a07c5940-59e1-4308-87ec-b9b37984f4fe/ent.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
ent.addComponentOrReplace(gltfShape2)

const imageFromURL = new Entity('imageFromURL')
engine.addEntity(imageFromURL)
imageFromURL.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(12.55233383178711, 0.9050083160400391, 2.3616580963134766),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.5000014305114746, 1, 1.0000009536743164)
})
imageFromURL.addComponentOrReplace(transform8)

const imageFromURL2 = new Entity('imageFromURL2')
engine.addEntity(imageFromURL2)
imageFromURL2.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(7.613182067871094, 0.9050083756446838, 44.157470703125),
  rotation: new Quaternion(2.1770622922413687e-15, -5.960464477539063e-8, 4.6412446131629485e-15, -1),
  scale: new Vector3(1.5000035762786865, 1, 1.0000020265579224)
})
imageFromURL2.addComponentOrReplace(transform9)

const externalLink2 = new Entity('externalLink2')
engine.addEntity(externalLink2)
externalLink2.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(6.501106262207031, 1.1605284214019775, 44.42250442504883),
  rotation: new Quaternion(2.1770622922413687e-15, -5.960464477539063e-8, 4.6412446131629485e-15, -1),
  scale: new Vector3(1.0000029802322388, 1, 1.0000029802322388)
})
externalLink2.addComponentOrReplace(transform10)

const videoStream = new Entity('videoStream')
engine.addEntity(videoStream)
videoStream.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(2.5708117485046387, 1.4731895923614502, 58),
  rotation: new Quaternion(-2.5130021236277654e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000026226043701, 1, 1.0000026226043701)
})
videoStream.addComponentOrReplace(transform11)

const metaaniLowYELLOW = new Entity('metaaniLowYELLOW')
engine.addEntity(metaaniLowYELLOW)
metaaniLowYELLOW.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(8.683708190917969, 0.2299056053161621, 6.195672988891602),
  rotation: new Quaternion(-2.220446049250313e-16, 0.3826834559440613, -4.561941935321556e-8, 0.9238795638084412),
  scale: new Vector3(1, 1, 1)
})
metaaniLowYELLOW.addComponentOrReplace(transform12)
const gltfShape3 = new GLTFShape("771ce836-e7b6-4e1f-8031-2aa3f628b683/metaani_low_YELLOW.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
metaaniLowYELLOW.addComponentOrReplace(gltfShape3)

const metaaniLowGREEN = new Entity('metaaniLowGREEN')
engine.addEntity(metaaniLowGREEN)
metaaniLowGREEN.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(13, 0.17566132545471191, 14),
  rotation: new Quaternion(-6.65064594497863e-16, 0.4713967442512512, -5.6194867426029305e-8, 0.8819212913513184),
  scale: new Vector3(1, 1, 1)
})
metaaniLowGREEN.addComponentOrReplace(transform13)
const gltfShape4 = new GLTFShape("ee95b579-d352-4122-b190-b927c431b167/metaani_low_GREEN.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
metaaniLowGREEN.addComponentOrReplace(gltfShape4)

const metaaniLowBLUE = new Entity('metaaniLowBLUE')
engine.addEntity(metaaniLowBLUE)
metaaniLowBLUE.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(7, 27.71919059753418, 7.5),
  rotation: new Quaternion(-1.1059513315930347e-15, -0.5555702447891235, 6.622912707143769e-8, 0.8314695954322815),
  scale: new Vector3(0.9999999403953552, 1, 0.9999999403953552)
})
metaaniLowBLUE.addComponentOrReplace(transform14)
const gltfShape5 = new GLTFShape("cf2b5d8f-0b5d-4943-b324-209cad86e22f/metaani_low_BLUE.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
metaaniLowBLUE.addComponentOrReplace(gltfShape5)

const metaaniLowBLUE3 = new Entity('metaaniLowBLUE3')
engine.addEntity(metaaniLowBLUE3)
metaaniLowBLUE3.setParent(_scene)
metaaniLowBLUE3.addComponentOrReplace(gltfShape5)
const transform15 = new Transform({
  position: new Vector3(10.126738548278809, 27.841005325317383, 8.00599479675293),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
metaaniLowBLUE3.addComponentOrReplace(transform15)

const metaaniLowBLUE4 = new Entity('metaaniLowBLUE4')
engine.addEntity(metaaniLowBLUE4)
metaaniLowBLUE4.setParent(_scene)
metaaniLowBLUE4.addComponentOrReplace(gltfShape5)
const transform16 = new Transform({
  position: new Vector3(3.994610071182251, 0.22770202159881592, 10.91888427734375),
  rotation: new Quaternion(1.140490555855207e-16, -0.3090626001358032, 3.684312943619261e-8, 0.9510417580604553),
  scale: new Vector3(1, 1, 1)
})
metaaniLowBLUE4.addComponentOrReplace(transform16)

const metaaniLowBLUE5 = new Entity('metaaniLowBLUE5')
engine.addEntity(metaaniLowBLUE5)
metaaniLowBLUE5.setParent(_scene)
metaaniLowBLUE5.addComponentOrReplace(gltfShape5)
const transform17 = new Transform({
  position: new Vector3(4, 0.22255194187164307, 6),
  rotation: new Quaternion(-2.220446049250313e-16, -0.3826834559440613, 4.561941935321556e-8, 0.9238795638084412),
  scale: new Vector3(1, 1, 1)
})
metaaniLowBLUE5.addComponentOrReplace(transform17)

const metaaniLowPink = new Entity('metaaniLowPink')
engine.addEntity(metaaniLowPink)
metaaniLowPink.setParent(_scene)
const transform18 = new Transform({
  position: new Vector3(13.061406135559082, 0.1695876121520996, 17.568241119384766),
  rotation: new Quaternion(-1.1059513315930347e-15, 0.5555702447891235, -6.622912707143769e-8, 0.8314695954322815),
  scale: new Vector3(0.9999999403953552, 1, 0.9999999403953552)
})
metaaniLowPink.addComponentOrReplace(transform18)
const gltfShape6 = new GLTFShape("2433fb78-bbe6-4095-8738-fe066b49036c/metaani_low_pink.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
metaaniLowPink.addComponentOrReplace(gltfShape6)

const metaaniLowYELLOW2 = new Entity('metaaniLowYELLOW2')
engine.addEntity(metaaniLowYELLOW2)
metaaniLowYELLOW2.setParent(_scene)
metaaniLowYELLOW2.addComponentOrReplace(gltfShape3)
const transform19 = new Transform({
  position: new Vector3(8.683708190917969, 0.2299056053161621, 19.6956729888916),
  rotation: new Quaternion(-2.220446049250313e-16, 0.3826834559440613, -4.561941935321556e-8, 0.9238795638084412),
  scale: new Vector3(1, 1, 1)
})
metaaniLowYELLOW2.addComponentOrReplace(transform19)

const metaaniLowYELLOW3 = new Entity('metaaniLowYELLOW3')
engine.addEntity(metaaniLowYELLOW3)
metaaniLowYELLOW3.setParent(_scene)
metaaniLowYELLOW3.addComponentOrReplace(gltfShape3)
const transform20 = new Transform({
  position: new Vector3(13.183708190917969, 0.2299056053161621, 6.195672988891602),
  rotation: new Quaternion(-1.2063891103466606e-15, -0.19509032368659973, 2.3256575332197826e-8, 0.9807853102684021),
  scale: new Vector3(0.9999998211860657, 1, 0.9999998211860657)
})
metaaniLowYELLOW3.addComponentOrReplace(transform20)

const metaaniLowGREEN2 = new Entity('metaaniLowGREEN2')
engine.addEntity(metaaniLowGREEN2)
metaaniLowGREEN2.setParent(_scene)
metaaniLowGREEN2.addComponentOrReplace(gltfShape4)
const transform21 = new Transform({
  position: new Vector3(13, 0.17566132545471191, 28),
  rotation: new Quaternion(9.42746823261089e-16, 0.09801715612411499, -1.1684551992630077e-8, -0.9951847791671753),
  scale: new Vector3(0.9999999403953552, 1, 0.9999999403953552)
})
metaaniLowGREEN2.addComponentOrReplace(transform21)

const metaaniLowBLUE2 = new Entity('metaaniLowBLUE2')
engine.addEntity(metaaniLowBLUE2)
metaaniLowBLUE2.setParent(_scene)
metaaniLowBLUE2.addComponentOrReplace(gltfShape5)
const transform22 = new Transform({
  position: new Vector3(7, 0.10773336887359619, 36.5),
  rotation: new Quaternion(-1.1059513315930347e-15, -0.5555702447891235, 6.622912707143769e-8, 0.8314695954322815),
  scale: new Vector3(0.9999999403953552, 1, 0.9999999403953552)
})
metaaniLowBLUE2.addComponentOrReplace(transform22)

const metaaniLowYELLOW4 = new Entity('metaaniLowYELLOW4')
engine.addEntity(metaaniLowYELLOW4)
metaaniLowYELLOW4.setParent(_scene)
metaaniLowYELLOW4.addComponentOrReplace(gltfShape3)
const transform23 = new Transform({
  position: new Vector3(13.183708190917969, 0.2299056053161621, 35.19567108154297),
  rotation: new Quaternion(-1.2063891103466606e-15, -0.19509032368659973, 2.3256575332197826e-8, 0.9807853102684021),
  scale: new Vector3(0.9999995827674866, 1, 0.9999995827674866)
})
metaaniLowYELLOW4.addComponentOrReplace(transform23)

const metaaniLowYELLOW5 = new Entity('metaaniLowYELLOW5')
engine.addEntity(metaaniLowYELLOW5)
metaaniLowYELLOW5.setParent(_scene)
metaaniLowYELLOW5.addComponentOrReplace(gltfShape3)
const transform24 = new Transform({
  position: new Vector3(8.683708190917969, 0.2299056053161621, 35.19567108154297),
  rotation: new Quaternion(-2.220446049250313e-16, 0.3826834559440613, -4.561941935321556e-8, 0.9238795638084412),
  scale: new Vector3(1, 1, 1)
})
metaaniLowYELLOW5.addComponentOrReplace(transform24)

const metaaniLowBLUE7 = new Entity('metaaniLowBLUE7')
engine.addEntity(metaaniLowBLUE7)
metaaniLowBLUE7.setParent(_scene)
metaaniLowBLUE7.addComponentOrReplace(gltfShape5)
const transform25 = new Transform({
  position: new Vector3(11.546935081481934, 0.210776686668396, 36.657989501953125),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
metaaniLowBLUE7.addComponentOrReplace(transform25)

const metaaniLowGREEN3 = new Entity('metaaniLowGREEN3')
engine.addEntity(metaaniLowGREEN3)
metaaniLowGREEN3.setParent(_scene)
metaaniLowGREEN3.addComponentOrReplace(gltfShape4)
const transform26 = new Transform({
  position: new Vector3(13, 0.17566132545471191, 43),
  rotation: new Quaternion(-6.65064594497863e-16, 0.4713967442512512, -5.6194867426029305e-8, 0.8819212913513184),
  scale: new Vector3(1, 1, 1)
})
metaaniLowGREEN3.addComponentOrReplace(transform26)

const metaaniLowPink2 = new Entity('metaaniLowPink2')
engine.addEntity(metaaniLowPink2)
metaaniLowPink2.setParent(_scene)
metaaniLowPink2.addComponentOrReplace(gltfShape6)
const transform27 = new Transform({
  position: new Vector3(13.061406135559082, 0.1695876121520996, 46.5682373046875),
  rotation: new Quaternion(-1.1059513315930347e-15, 0.5555702447891235, -6.622912707143769e-8, 0.8314695954322815),
  scale: new Vector3(0.9999999403953552, 1, 0.9999999403953552)
})
metaaniLowPink2.addComponentOrReplace(transform27)

const metaaniLowYELLOW6 = new Entity('metaaniLowYELLOW6')
engine.addEntity(metaaniLowYELLOW6)
metaaniLowYELLOW6.setParent(_scene)
metaaniLowYELLOW6.addComponentOrReplace(gltfShape3)
const transform28 = new Transform({
  position: new Vector3(8.683708190917969, 0.2299056053161621, 48.69567108154297),
  rotation: new Quaternion(-2.220446049250313e-16, 0.3826834559440613, -4.561941935321556e-8, 0.9238795638084412),
  scale: new Vector3(1, 1, 1)
})
metaaniLowYELLOW6.addComponentOrReplace(transform28)

const metaaniLowBLUE9 = new Entity('metaaniLowBLUE9')
engine.addEntity(metaaniLowBLUE9)
metaaniLowBLUE9.setParent(_scene)
metaaniLowBLUE9.addComponentOrReplace(gltfShape5)
const transform29 = new Transform({
  position: new Vector3(0.9956188201904297, 0.10773368179798126, 51.135501861572266),
  rotation: new Quaternion(-2.2806171522408904e-15, -0.290284663438797, 3.4604624943312956e-8, 0.9569403529167175),
  scale: new Vector3(1, 1, 1)
})
metaaniLowBLUE9.addComponentOrReplace(transform29)

const metaaniLowYELLOW7 = new Entity('metaaniLowYELLOW7')
engine.addEntity(metaaniLowYELLOW7)
metaaniLowYELLOW7.setParent(_scene)
metaaniLowYELLOW7.addComponentOrReplace(gltfShape3)
const transform30 = new Transform({
  position: new Vector3(5.412537574768066, 0.22990554571151733, 46.615509033203125),
  rotation: new Quaternion(-3.0403184615344307e-15, 0.0980171412229538, -1.1684553768986916e-8, 0.9951847791671753),
  scale: new Vector3(0.9999997019767761, 1, 0.9999997019767761)
})
metaaniLowYELLOW7.addComponentOrReplace(transform30)

const metaaniLowYELLOW8 = new Entity('metaaniLowYELLOW8')
engine.addEntity(metaaniLowYELLOW8)
metaaniLowYELLOW8.setParent(_scene)
metaaniLowYELLOW8.addComponentOrReplace(gltfShape3)
const transform31 = new Transform({
  position: new Vector3(1.670924186706543, 0.2299058437347412, 49.11557388305664),
  rotation: new Quaternion(-2.4587954031352792e-15, 0.6343933343887329, -7.56255715828047e-8, 0.7730104923248291),
  scale: new Vector3(1.000000238418579, 1, 1.000000238418579)
})
metaaniLowYELLOW8.addComponentOrReplace(transform31)

const metaaniLowBLUE10 = new Entity('metaaniLowBLUE10')
engine.addEntity(metaaniLowBLUE10)
metaaniLowBLUE10.setParent(_scene)
metaaniLowBLUE10.addComponentOrReplace(gltfShape5)
const transform32 = new Transform({
  position: new Vector3(3.3520774841308594, 0.1907823234796524, 50.16231155395508),
  rotation: new Quaternion(-1.4700330914981267e-15, 0.2902846932411194, -3.4604628496026635e-8, 0.9569403529167175),
  scale: new Vector3(1, 1, 1)
})
metaaniLowBLUE10.addComponentOrReplace(transform32)

const metaaniLowBLUE11 = new Entity('metaaniLowBLUE11')
engine.addEntity(metaaniLowBLUE11)
metaaniLowBLUE11.setParent(_scene)
metaaniLowBLUE11.addComponentOrReplace(gltfShape5)
const transform33 = new Transform({
  position: new Vector3(6.129929065704346, 0.2299218475818634, 54.31966018676758),
  rotation: new Quaternion(-1.4700330914981267e-15, 0.2902846932411194, -3.4604628496026635e-8, 0.9569403529167175),
  scale: new Vector3(1, 1, 1)
})
metaaniLowBLUE11.addComponentOrReplace(transform33)

const metaaniLowPink3 = new Entity('metaaniLowPink3')
engine.addEntity(metaaniLowPink3)
metaaniLowPink3.setParent(_scene)
metaaniLowPink3.addComponentOrReplace(gltfShape6)
const transform34 = new Transform({
  position: new Vector3(11.629106521606445, 0.16958731412887573, 56.139400482177734),
  rotation: new Quaternion(-2.2806171522408904e-15, 0.7730104923248291, -9.21500173944878e-8, 0.6343932747840881),
  scale: new Vector3(0.9999997615814209, 1, 0.9999997615814209)
})
metaaniLowPink3.addComponentOrReplace(transform34)

const metaaniLowYELLOW9 = new Entity('metaaniLowYELLOW9')
engine.addEntity(metaaniLowYELLOW9)
metaaniLowYELLOW9.setParent(_scene)
metaaniLowYELLOW9.addComponentOrReplace(gltfShape3)
const transform35 = new Transform({
  position: new Vector3(9.171122550964355, 0.22990557551383972, 60.340415954589844),
  rotation: new Quaternion(-2.4587954031352792e-15, 0.6343933343887329, -7.56255715828047e-8, 0.7730104923248291),
  scale: new Vector3(1.000000238418579, 1, 1.000000238418579)
})
metaaniLowYELLOW9.addComponentOrReplace(transform35)

const metaaniLowBLUE12 = new Entity('metaaniLowBLUE12')
engine.addEntity(metaaniLowBLUE12)
metaaniLowBLUE12.setParent(_scene)
metaaniLowBLUE12.addComponentOrReplace(gltfShape5)
const transform36 = new Transform({
  position: new Vector3(0.9956188201904297, 0.10773368179798126, 22.635501861572266),
  rotation: new Quaternion(-2.2806171522408904e-15, -0.290284663438797, 3.4604624943312956e-8, 0.9569403529167175),
  scale: new Vector3(1, 1, 1)
})
metaaniLowBLUE12.addComponentOrReplace(transform36)

const metaaniLowYELLOW10 = new Entity('metaaniLowYELLOW10')
engine.addEntity(metaaniLowYELLOW10)
metaaniLowYELLOW10.setParent(_scene)
metaaniLowYELLOW10.addComponentOrReplace(gltfShape3)
const transform37 = new Transform({
  position: new Vector3(5.412537574768066, 0.22990554571151733, 18.115509033203125),
  rotation: new Quaternion(-3.0403184615344307e-15, 0.0980171412229538, -1.1684553768986916e-8, 0.9951847791671753),
  scale: new Vector3(0.9999997615814209, 1, 0.9999997615814209)
})
metaaniLowYELLOW10.addComponentOrReplace(transform37)

const metaaniLowYELLOW11 = new Entity('metaaniLowYELLOW11')
engine.addEntity(metaaniLowYELLOW11)
metaaniLowYELLOW11.setParent(_scene)
metaaniLowYELLOW11.addComponentOrReplace(gltfShape3)
const transform38 = new Transform({
  position: new Vector3(1.670924186706543, 0.2299058437347412, 20.61557388305664),
  rotation: new Quaternion(-2.4587954031352792e-15, 0.6343933343887329, -7.56255715828047e-8, 0.7730104923248291),
  scale: new Vector3(1.0000004768371582, 1, 1.0000004768371582)
})
metaaniLowYELLOW11.addComponentOrReplace(transform38)

const metaaniLowBLUE13 = new Entity('metaaniLowBLUE13')
engine.addEntity(metaaniLowBLUE13)
metaaniLowBLUE13.setParent(_scene)
metaaniLowBLUE13.addComponentOrReplace(gltfShape5)
const transform39 = new Transform({
  position: new Vector3(3.3520774841308594, 1.341104507446289e-7, 21.662311553955078),
  rotation: new Quaternion(-1.4700330914981267e-15, 0.2902846932411194, -3.4604628496026635e-8, 0.9569403529167175),
  scale: new Vector3(1, 1, 1)
})
metaaniLowBLUE13.addComponentOrReplace(transform39)

const metaaniLowBLUE14 = new Entity('metaaniLowBLUE14')
engine.addEntity(metaaniLowBLUE14)
metaaniLowBLUE14.setParent(_scene)
metaaniLowBLUE14.addComponentOrReplace(gltfShape5)
const transform40 = new Transform({
  position: new Vector3(6.129929065704346, 0.2299218475818634, 25.819660186767578),
  rotation: new Quaternion(-1.4700330914981267e-15, 0.2902846932411194, -3.4604628496026635e-8, 0.9569403529167175),
  scale: new Vector3(1, 1, 1)
})
metaaniLowBLUE14.addComponentOrReplace(transform40)

const metaaniLowGREEN5 = new Entity('metaaniLowGREEN5')
engine.addEntity(metaaniLowGREEN5)
metaaniLowGREEN5.setParent(_scene)
metaaniLowGREEN5.addComponentOrReplace(gltfShape4)
const transform41 = new Transform({
  position: new Vector3(9.595643043518066, 0.1756611168384552, 24.706634521484375),
  rotation: new Quaternion(-3.709237320640097e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000005960464478, 1, 1.0000005960464478)
})
metaaniLowGREEN5.addComponentOrReplace(transform41)

const metaaniLowPink4 = new Entity('metaaniLowPink4')
engine.addEntity(metaaniLowPink4)
metaaniLowPink4.setParent(_scene)
metaaniLowPink4.addComponentOrReplace(gltfShape6)
const transform42 = new Transform({
  position: new Vector3(11.629106521606445, 0.16958731412887573, 27.639400482177734),
  rotation: new Quaternion(-2.2806171522408904e-15, 0.7730104923248291, -9.21500173944878e-8, 0.6343932747840881),
  scale: new Vector3(0.9999997019767761, 1, 0.9999997019767761)
})
metaaniLowPink4.addComponentOrReplace(transform42)

const metaaniLowYELLOW12 = new Entity('metaaniLowYELLOW12')
engine.addEntity(metaaniLowYELLOW12)
metaaniLowYELLOW12.setParent(_scene)
metaaniLowYELLOW12.addComponentOrReplace(gltfShape3)
const transform43 = new Transform({
  position: new Vector3(9.171122550964355, 0.22990557551383972, 31.840415954589844),
  rotation: new Quaternion(-2.4587954031352792e-15, 0.6343933343887329, -7.56255715828047e-8, 0.7730104923248291),
  scale: new Vector3(1.0000004768371582, 1, 1.0000004768371582)
})
metaaniLowYELLOW12.addComponentOrReplace(transform43)

const metaaniLowYELLOW13 = new Entity('metaaniLowYELLOW13')
engine.addEntity(metaaniLowYELLOW13)
metaaniLowYELLOW13.setParent(_scene)
metaaniLowYELLOW13.addComponentOrReplace(gltfShape3)
const transform44 = new Transform({
  position: new Vector3(2.7401528358459473, 0.22990715503692627, 38.978485107421875),
  rotation: new Quaternion(-3.564048250184184e-15, -0.9807853102684021, 1.1691871293351142e-7, -0.19509029388427734),
  scale: new Vector3(1.0000001192092896, 1, 1.0000001192092896)
})
metaaniLowYELLOW13.addComponentOrReplace(transform44)

const metaaniLowYELLOW14 = new Entity('metaaniLowYELLOW14')
engine.addEntity(metaaniLowYELLOW14)
metaaniLowYELLOW14.setParent(_scene)
metaaniLowYELLOW14.addComponentOrReplace(gltfShape3)
const transform45 = new Transform({
  position: new Vector3(7.2401556968688965, 0.22990714013576508, 38.97848892211914),
  rotation: new Quaternion(-2.587338793869987e-15, -0.9238795638084412, 1.1013501222123523e-7, 0.3826834559440613),
  scale: new Vector3(1.0000014305114746, 1, 1.0000014305114746)
})
metaaniLowYELLOW14.addComponentOrReplace(transform45)

const metaaniLowBLUE16 = new Entity('metaaniLowBLUE16')
engine.addEntity(metaaniLowBLUE16)
metaaniLowBLUE16.setParent(_scene)
metaaniLowBLUE16.addComponentOrReplace(gltfShape5)
const transform46 = new Transform({
  position: new Vector3(3.423863410949707, 0.19706356525421143, 37.17416000366211),
  rotation: new Quaternion(-4.9780075488158396e-15, -1, 1.1920927533992653e-7, 0),
  scale: new Vector3(1.0000004768371582, 1, 1.0000004768371582)
})
metaaniLowBLUE16.addComponentOrReplace(transform46)

const metaaniLowBLUE17 = new Entity('metaaniLowBLUE17')
engine.addEntity(metaaniLowBLUE17)
metaaniLowBLUE17.setParent(_scene)
metaaniLowBLUE17.addComponentOrReplace(gltfShape5)
const transform47 = new Transform({
  position: new Vector3(6.423863410949707, 0.22992169857025146, 32.174156188964844),
  rotation: new Quaternion(-4.9780075488158396e-15, -1, 1.1920927533992653e-7, 0),
  scale: new Vector3(1.0000004768371582, 1, 1.0000004768371582)
})
metaaniLowBLUE17.addComponentOrReplace(transform47)

const metaaniLowGREEN6 = new Entity('metaaniLowGREEN6')
engine.addEntity(metaaniLowGREEN6)
metaaniLowGREEN6.setParent(_scene)
metaaniLowGREEN6.addComponentOrReplace(gltfShape4)
const transform48 = new Transform({
  position: new Vector3(2.923863410949707, 0.17566099762916565, 31.174156188964844),
  rotation: new Quaternion(5.676450588331002e-16, -0.8819213509559631, 1.0513320347627086e-7, 0.4713967442512512),
  scale: new Vector3(1.0000019073486328, 1, 1.0000019073486328)
})
metaaniLowGREEN6.addComponentOrReplace(transform48)

const metaaniLowPink5 = new Entity('metaaniLowPink5')
engine.addEntity(metaaniLowPink5)
metaaniLowPink5.setParent(_scene)
metaaniLowPink5.addComponentOrReplace(gltfShape6)
const transform49 = new Transform({
  position: new Vector3(2.862457275390625, 0.1695864200592041, 27.605918884277344),
  rotation: new Quaternion(-5.136575928190107e-15, -0.8314695954322815, 9.911887843827571e-8, 0.5555702447891235),
  scale: new Vector3(0.9999999403953552, 1, 0.9999999403953552)
})
metaaniLowPink5.addComponentOrReplace(transform49)

const metaaniLowYELLOW15 = new Entity('metaaniLowYELLOW15')
engine.addEntity(metaaniLowYELLOW15)
metaaniLowYELLOW15.setParent(_scene)
metaaniLowYELLOW15.addComponentOrReplace(gltfShape3)
const transform50 = new Transform({
  position: new Vector3(7.02131986618042, 0.22990405559539795, 26.57864761352539),
  rotation: new Quaternion(-2.587338793869987e-15, -0.9238795638084412, 1.1013501222123523e-7, 0.3826834559440613),
  scale: new Vector3(1.0000014305114746, 1, 1.0000014305114746)
})
metaaniLowYELLOW15.addComponentOrReplace(transform50)

const metaaniLowBLUE18 = new Entity('metaaniLowBLUE18')
engine.addEntity(metaaniLowBLUE18)
metaaniLowBLUE18.setParent(_scene)
metaaniLowBLUE18.addComponentOrReplace(gltfShape5)
const transform51 = new Transform({
  position: new Vector3(14.42386245727539, 0.1077345758676529, 60.17416000366211),
  rotation: new Quaternion(4.136921619884212e-15, -0.8314696550369263, 9.911889264913043e-8, -0.5555702447891235),
  scale: new Vector3(1.0000020265579224, 1, 1.0000020265579224)
})
metaaniLowBLUE18.addComponentOrReplace(transform51)

const metaaniLowYELLOW16 = new Entity('metaaniLowYELLOW16')
engine.addEntity(metaaniLowYELLOW16)
metaaniLowYELLOW16.setParent(_scene)
metaaniLowYELLOW16.addComponentOrReplace(gltfShape3)
const transform52 = new Transform({
  position: new Vector3(8.240152359008789, 0.22990715503692627, 61.478485107421875),
  rotation: new Quaternion(-1.8510793755015936e-14, -0.09801718592643738, 1.1684562650771113e-8, -0.9951847791671753),
  scale: new Vector3(1.0000007152557373, 1, 1.0000007152557373)
})
metaaniLowYELLOW16.addComponentOrReplace(transform52)

const metaaniLowYELLOW17 = new Entity('metaaniLowYELLOW17')
engine.addEntity(metaaniLowYELLOW17)
metaaniLowYELLOW17.setParent(_scene)
metaaniLowYELLOW17.addComponentOrReplace(gltfShape3)
const transform53 = new Transform({
  position: new Vector3(12.740156173706055, 0.22990714013576508, 61.47848892211914),
  rotation: new Quaternion(-2.587338793869987e-15, -0.9238795638084412, 1.1013501222123523e-7, 0.3826834559440613),
  scale: new Vector3(1.000002145767212, 1, 1.000002145767212)
})
metaaniLowYELLOW17.addComponentOrReplace(transform53)

const metaaniLowBLUE19 = new Entity('metaaniLowBLUE19')
engine.addEntity(metaaniLowBLUE19)
metaaniLowBLUE19.setParent(_scene)
metaaniLowBLUE19.addComponentOrReplace(gltfShape5)
const transform54 = new Transform({
  position: new Vector3(11.953898429870605, 0.23853899538516998, 59.371009826660156),
  rotation: new Quaternion(-4.9780075488158396e-15, -1, 1.1920927533992653e-7, 0),
  scale: new Vector3(1.0000004768371582, 1, 1.0000004768371582)
})
metaaniLowBLUE19.addComponentOrReplace(transform54)

const metaaniLowBLUE20 = new Entity('metaaniLowBLUE20')
engine.addEntity(metaaniLowBLUE20)
metaaniLowBLUE20.setParent(_scene)
metaaniLowBLUE20.addComponentOrReplace(gltfShape5)
const transform55 = new Transform({
  position: new Vector3(11.923863410949707, 0.22992169857025146, 54.674156188964844),
  rotation: new Quaternion(-4.9780075488158396e-15, -1, 1.1920927533992653e-7, 0),
  scale: new Vector3(1.0000004768371582, 1, 1.0000004768371582)
})
metaaniLowBLUE20.addComponentOrReplace(transform55)

const metaaniLowGREEN7 = new Entity('metaaniLowGREEN7')
engine.addEntity(metaaniLowGREEN7)
metaaniLowGREEN7.setParent(_scene)
metaaniLowGREEN7.addComponentOrReplace(gltfShape4)
const transform56 = new Transform({
  position: new Vector3(8.423863410949707, 0.17566099762916565, 53.674156188964844),
  rotation: new Quaternion(5.676450588331002e-16, -0.8819213509559631, 1.0513320347627086e-7, 0.4713967442512512),
  scale: new Vector3(1.0000033378601074, 1, 1.0000033378601074)
})
metaaniLowGREEN7.addComponentOrReplace(transform56)

const metaaniLowPink6 = new Entity('metaaniLowPink6')
engine.addEntity(metaaniLowPink6)
metaaniLowPink6.setParent(_scene)
metaaniLowPink6.addComponentOrReplace(gltfShape6)
const transform57 = new Transform({
  position: new Vector3(8.362457275390625, 0.1695864200592041, 50.105918884277344),
  rotation: new Quaternion(-5.136575928190107e-15, -0.8314695954322815, 9.911887843827571e-8, 0.5555702447891235),
  scale: new Vector3(0.9999999403953552, 1, 0.9999999403953552)
})
metaaniLowPink6.addComponentOrReplace(transform57)

const metaaniLowYELLOW18 = new Entity('metaaniLowYELLOW18')
engine.addEntity(metaaniLowYELLOW18)
metaaniLowYELLOW18.setParent(_scene)
metaaniLowYELLOW18.addComponentOrReplace(gltfShape3)
const transform58 = new Transform({
  position: new Vector3(12.521320343017578, 0.22990405559539795, 49.07864761352539),
  rotation: new Quaternion(-2.587338793869987e-15, -0.9238795638084412, 1.1013501222123523e-7, 0.3826834559440613),
  scale: new Vector3(1.000002145767212, 1, 1.000002145767212)
})
metaaniLowYELLOW18.addComponentOrReplace(transform58)

const metaaniLowBLUE21 = new Entity('metaaniLowBLUE21')
engine.addEntity(metaaniLowBLUE21)
metaaniLowBLUE21.setParent(_scene)
metaaniLowBLUE21.addComponentOrReplace(gltfShape5)
const transform59 = new Transform({
  position: new Vector3(12.92386245727539, 0.1077345758676529, 12.17416000366211),
  rotation: new Quaternion(4.136921619884212e-15, -0.8314696550369263, 9.911889264913043e-8, -0.5555702447891235),
  scale: new Vector3(1.0000029802322388, 1, 1.0000029802322388)
})
metaaniLowBLUE21.addComponentOrReplace(transform59)

const metaaniLowYELLOW19 = new Entity('metaaniLowYELLOW19')
engine.addEntity(metaaniLowYELLOW19)
metaaniLowYELLOW19.setParent(_scene)
metaaniLowYELLOW19.addComponentOrReplace(gltfShape3)
const transform60 = new Transform({
  position: new Vector3(6.740152359008789, 0.22990715503692627, 13.478485107421875),
  rotation: new Quaternion(-3.564048250184184e-15, -0.9807853102684021, 1.1691871293351142e-7, -0.19509029388427734),
  scale: new Vector3(1.0000009536743164, 1, 1.0000009536743164)
})
metaaniLowYELLOW19.addComponentOrReplace(transform60)

const metaaniLowYELLOW20 = new Entity('metaaniLowYELLOW20')
engine.addEntity(metaaniLowYELLOW20)
metaaniLowYELLOW20.setParent(_scene)
metaaniLowYELLOW20.addComponentOrReplace(gltfShape3)
const transform61 = new Transform({
  position: new Vector3(11.240156173706055, 27.84136390686035, 13.47848892211914),
  rotation: new Quaternion(-2.587338793869987e-15, -0.9238795638084412, 1.1013501222123523e-7, 0.3826834559440613),
  scale: new Vector3(1.0000038146972656, 1, 1.0000038146972656)
})
metaaniLowYELLOW20.addComponentOrReplace(transform61)

const metaaniLowBLUE22 = new Entity('metaaniLowBLUE22')
engine.addEntity(metaaniLowBLUE22)
metaaniLowBLUE22.setParent(_scene)
metaaniLowBLUE22.addComponentOrReplace(gltfShape5)
const transform62 = new Transform({
  position: new Vector3(10.245647430419922, 0.2566643953323364, 11.886209487915039),
  rotation: new Quaternion(-4.9780075488158396e-15, -1, 1.1920927533992653e-7, 0),
  scale: new Vector3(1.0000004768371582, 1, 1.0000004768371582)
})
metaaniLowBLUE22.addComponentOrReplace(transform62)

const metaaniLowBLUE23 = new Entity('metaaniLowBLUE23')
engine.addEntity(metaaniLowBLUE23)
metaaniLowBLUE23.setParent(_scene)
metaaniLowBLUE23.addComponentOrReplace(gltfShape5)
const transform63 = new Transform({
  position: new Vector3(10.423863410949707, 0.22992169857025146, 6.674156188964844),
  rotation: new Quaternion(-4.9780075488158396e-15, -1, 1.1920927533992653e-7, 0),
  scale: new Vector3(1.0000004768371582, 1, 1.0000004768371582)
})
metaaniLowBLUE23.addComponentOrReplace(transform63)

const metaaniLowGREEN8 = new Entity('metaaniLowGREEN8')
engine.addEntity(metaaniLowGREEN8)
metaaniLowGREEN8.setParent(_scene)
metaaniLowGREEN8.addComponentOrReplace(gltfShape4)
const transform64 = new Transform({
  position: new Vector3(6.923863410949707, 0.17566099762916565, 5.674156188964844),
  rotation: new Quaternion(5.676450588331002e-16, -0.8819213509559631, 1.0513320347627086e-7, 0.4713967442512512),
  scale: new Vector3(1.0000052452087402, 1, 1.0000052452087402)
})
metaaniLowGREEN8.addComponentOrReplace(transform64)

const metaaniLowPink7 = new Entity('metaaniLowPink7')
engine.addEntity(metaaniLowPink7)
metaaniLowPink7.setParent(_scene)
metaaniLowPink7.addComponentOrReplace(gltfShape6)
const transform65 = new Transform({
  position: new Vector3(6.862457275390625, 0.1695864200592041, 2.1059188842773438),
  rotation: new Quaternion(-5.136575928190107e-15, -0.8314695954322815, 9.911887843827571e-8, 0.5555702447891235),
  scale: new Vector3(0.9999999403953552, 1, 0.9999999403953552)
})
metaaniLowPink7.addComponentOrReplace(transform65)

const metaaniLowYELLOW21 = new Entity('metaaniLowYELLOW21')
engine.addEntity(metaaniLowYELLOW21)
metaaniLowYELLOW21.setParent(_scene)
metaaniLowYELLOW21.addComponentOrReplace(gltfShape3)
const transform66 = new Transform({
  position: new Vector3(11.021320343017578, 0.22990405559539795, 1.0786476135253906),
  rotation: new Quaternion(-2.587338793869987e-15, -0.9238795638084412, 1.1013501222123523e-7, 0.3826834559440613),
  scale: new Vector3(1.0000030994415283, 1, 1.0000030994415283)
})
metaaniLowYELLOW21.addComponentOrReplace(transform66)

const metaaniLowPink8 = new Entity('metaaniLowPink8')
engine.addEntity(metaaniLowPink8)
metaaniLowPink8.setParent(_scene)
metaaniLowPink8.addComponentOrReplace(gltfShape6)
const transform67 = new Transform({
  position: new Vector3(13.84848690032959, 13.386954307556152, 17.568241119384766),
  rotation: new Quaternion(-1.1059513315930347e-15, 0.5555702447891235, -6.622912707143769e-8, 0.8314695954322815),
  scale: new Vector3(0.9999999403953552, 1, 0.9999999403953552)
})
metaaniLowPink8.addComponentOrReplace(transform67)

const metaaniLowGREEN9 = new Entity('metaaniLowGREEN9')
engine.addEntity(metaaniLowGREEN9)
metaaniLowGREEN9.setParent(_scene)
metaaniLowGREEN9.addComponentOrReplace(gltfShape4)
const transform68 = new Transform({
  position: new Vector3(13.787080764770508, 13.393028259277344, 14),
  rotation: new Quaternion(-6.65064594497863e-16, 0.4713967442512512, -5.6194867426029305e-8, 0.8819212913513184),
  scale: new Vector3(1, 1, 1)
})
metaaniLowGREEN9.addComponentOrReplace(transform68)

const metaaniLowBLUE24 = new Entity('metaaniLowBLUE24')
engine.addEntity(metaaniLowBLUE24)
metaaniLowBLUE24.setParent(_scene)
metaaniLowBLUE24.addComponentOrReplace(gltfShape5)
const transform69 = new Transform({
  position: new Vector3(13.710943222045898, 13.325101852416992, 12.17416000366211),
  rotation: new Quaternion(4.136921619884212e-15, -0.8314696550369263, 9.911889264913043e-8, -0.5555702447891235),
  scale: new Vector3(1.000003695487976, 1, 1.000003695487976)
})
metaaniLowBLUE24.addComponentOrReplace(transform69)

const metaaniLowYELLOW22 = new Entity('metaaniLowYELLOW22')
engine.addEntity(metaaniLowYELLOW22)
metaaniLowYELLOW22.setParent(_scene)
metaaniLowYELLOW22.addComponentOrReplace(gltfShape3)
const transform70 = new Transform({
  position: new Vector3(12.027236938476562, 13.447274208068848, 13.47848892211914),
  rotation: new Quaternion(-2.587338793869987e-15, -0.9238795638084412, 1.1013501222123523e-7, 0.3826834559440613),
  scale: new Vector3(1.0000038146972656, 1, 1.0000038146972656)
})
metaaniLowYELLOW22.addComponentOrReplace(transform70)

const metaaniLowBLUE26 = new Entity('metaaniLowBLUE26')
engine.addEntity(metaaniLowBLUE26)
metaaniLowBLUE26.setParent(_scene)
metaaniLowBLUE26.addComponentOrReplace(gltfShape5)
const transform71 = new Transform({
  position: new Vector3(10.913819313049316, 13.446915626525879, 8.00599479675293),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
metaaniLowBLUE26.addComponentOrReplace(transform71)

const metaaniLowYELLOW23 = new Entity('metaaniLowYELLOW23')
engine.addEntity(metaaniLowYELLOW23)
metaaniLowYELLOW23.setParent(_scene)
metaaniLowYELLOW23.addComponentOrReplace(gltfShape3)
const transform72 = new Transform({
  position: new Vector3(9.470788955688477, 13.447272300720215, 6.195672988891602),
  rotation: new Quaternion(-2.220446049250313e-16, 0.3826834559440613, -4.561941935321556e-8, 0.9238795638084412),
  scale: new Vector3(1, 1, 1)
})
metaaniLowYELLOW23.addComponentOrReplace(transform72)

const metaaniLowGREEN10 = new Entity('metaaniLowGREEN10')
engine.addEntity(metaaniLowGREEN10)
metaaniLowGREEN10.setParent(_scene)
metaaniLowGREEN10.addComponentOrReplace(gltfShape4)
const transform73 = new Transform({
  position: new Vector3(7.710944175720215, 13.393028259277344, 5.674156188964844),
  rotation: new Quaternion(5.676450588331002e-16, -0.8819213509559631, 1.0513320347627086e-7, 0.4713967442512512),
  scale: new Vector3(1.0000066757202148, 1, 1.0000066757202148)
})
metaaniLowGREEN10.addComponentOrReplace(transform73)

const metaaniLowYELLOW24 = new Entity('metaaniLowYELLOW24')
engine.addEntity(metaaniLowYELLOW24)
metaaniLowYELLOW24.setParent(_scene)
metaaniLowYELLOW24.addComponentOrReplace(gltfShape3)
const transform74 = new Transform({
  position: new Vector3(7.527233123779297, 13.447274208068848, 13.478485107421875),
  rotation: new Quaternion(-3.564048250184184e-15, -0.9807853102684021, 1.1691871293351142e-7, -0.19509029388427734),
  scale: new Vector3(1.000001311302185, 1, 1.000001311302185)
})
metaaniLowYELLOW24.addComponentOrReplace(transform74)

const metaaniLowBLUE28 = new Entity('metaaniLowBLUE28')
engine.addEntity(metaaniLowBLUE28)
metaaniLowBLUE28.setParent(_scene)
metaaniLowBLUE28.addComponentOrReplace(gltfShape5)
const transform75 = new Transform({
  position: new Vector3(10.287080764770508, 13.447288513183594, 13),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
metaaniLowBLUE28.addComponentOrReplace(transform75)

const metaaniLowPink9 = new Entity('metaaniLowPink9')
engine.addEntity(metaaniLowPink9)
metaaniLowPink9.setParent(_scene)
metaaniLowPink9.addComponentOrReplace(gltfShape6)
const transform76 = new Transform({
  position: new Vector3(13.84848690032959, 20.94754409790039, 17.568241119384766),
  rotation: new Quaternion(-1.1059513315930347e-15, 0.5555702447891235, -6.622912707143769e-8, 0.8314695954322815),
  scale: new Vector3(0.9999999403953552, 1, 0.9999999403953552)
})
metaaniLowPink9.addComponentOrReplace(transform76)

const metaaniLowGREEN11 = new Entity('metaaniLowGREEN11')
engine.addEntity(metaaniLowGREEN11)
metaaniLowGREEN11.setParent(_scene)
metaaniLowGREEN11.addComponentOrReplace(gltfShape4)
const transform77 = new Transform({
  position: new Vector3(13.787080764770508, 20.953617095947266, 14),
  rotation: new Quaternion(-6.65064594497863e-16, 0.4713967442512512, -5.6194867426029305e-8, 0.8819212913513184),
  scale: new Vector3(1, 1, 1)
})
metaaniLowGREEN11.addComponentOrReplace(transform77)

const metaaniLowBLUE29 = new Entity('metaaniLowBLUE29')
engine.addEntity(metaaniLowBLUE29)
metaaniLowBLUE29.setParent(_scene)
metaaniLowBLUE29.addComponentOrReplace(gltfShape5)
const transform78 = new Transform({
  position: new Vector3(13.710943222045898, 20.885692596435547, 12.17416000366211),
  rotation: new Quaternion(4.136921619884212e-15, -0.8314696550369263, 9.911889264913043e-8, -0.5555702447891235),
  scale: new Vector3(1.0000041723251343, 1, 1.0000041723251343)
})
metaaniLowBLUE29.addComponentOrReplace(transform78)

const metaaniLowYELLOW27 = new Entity('metaaniLowYELLOW27')
engine.addEntity(metaaniLowYELLOW27)
metaaniLowYELLOW27.setParent(_scene)
metaaniLowYELLOW27.addComponentOrReplace(gltfShape3)
const transform79 = new Transform({
  position: new Vector3(12.027236938476562, 21.007863998413086, 13.47848892211914),
  rotation: new Quaternion(-2.587338793869987e-15, -0.9238795638084412, 1.1013501222123523e-7, 0.3826834559440613),
  scale: new Vector3(1.0000042915344238, 1, 1.0000042915344238)
})
metaaniLowYELLOW27.addComponentOrReplace(transform79)

const metaaniLowYELLOW28 = new Entity('metaaniLowYELLOW28')
engine.addEntity(metaaniLowYELLOW28)
metaaniLowYELLOW28.setParent(_scene)
metaaniLowYELLOW28.addComponentOrReplace(gltfShape3)
const transform80 = new Transform({
  position: new Vector3(9.470788955688477, 21.007862091064453, 6.195672988891602),
  rotation: new Quaternion(-2.220446049250313e-16, 0.3826834559440613, -4.561941935321556e-8, 0.9238795638084412),
  scale: new Vector3(1, 1, 1)
})
metaaniLowYELLOW28.addComponentOrReplace(transform80)

const metaaniLowGREEN12 = new Entity('metaaniLowGREEN12')
engine.addEntity(metaaniLowGREEN12)
metaaniLowGREEN12.setParent(_scene)
metaaniLowGREEN12.addComponentOrReplace(gltfShape4)
const transform81 = new Transform({
  position: new Vector3(7.710944175720215, 20.953617095947266, 5.674156188964844),
  rotation: new Quaternion(5.676450588331002e-16, -0.8819213509559631, 1.0513320347627086e-7, 0.4713967442512512),
  scale: new Vector3(1.0000076293945312, 1, 1.0000076293945312)
})
metaaniLowGREEN12.addComponentOrReplace(transform81)

const metaaniLowBLUE32 = new Entity('metaaniLowBLUE32')
engine.addEntity(metaaniLowBLUE32)
metaaniLowBLUE32.setParent(_scene)
metaaniLowBLUE32.addComponentOrReplace(gltfShape5)
const transform82 = new Transform({
  position: new Vector3(7.787080764770508, 20.88568878173828, 7.5),
  rotation: new Quaternion(-1.1059513315930347e-15, -0.5555702447891235, 6.622912707143769e-8, 0.8314695954322815),
  scale: new Vector3(0.9999999403953552, 1, 0.9999999403953552)
})
metaaniLowBLUE32.addComponentOrReplace(transform82)

const metaaniLowYELLOW29 = new Entity('metaaniLowYELLOW29')
engine.addEntity(metaaniLowYELLOW29)
metaaniLowYELLOW29.setParent(_scene)
metaaniLowYELLOW29.addComponentOrReplace(gltfShape3)
const transform83 = new Transform({
  position: new Vector3(7.527233123779297, 21.007863998413086, 13.478485107421875),
  rotation: new Quaternion(-3.564048250184184e-15, -0.9807853102684021, 1.1691871293351142e-7, -0.19509029388427734),
  scale: new Vector3(1.0000015497207642, 1, 1.0000015497207642)
})
metaaniLowYELLOW29.addComponentOrReplace(transform83)

const metaaniLowYELLOW30 = new Entity('metaaniLowYELLOW30')
engine.addEntity(metaaniLowYELLOW30)
metaaniLowYELLOW30.setParent(_scene)
metaaniLowYELLOW30.addComponentOrReplace(gltfShape3)
const transform84 = new Transform({
  position: new Vector3(9.470788955688477, 21.007862091064453, 19.6956729888916),
  rotation: new Quaternion(-2.220446049250313e-16, 0.3826834559440613, -4.561941935321556e-8, 0.9238795638084412),
  scale: new Vector3(1, 1, 1)
})
metaaniLowYELLOW30.addComponentOrReplace(transform84)

const metaaniLowYELLOW31 = new Entity('metaaniLowYELLOW31')
engine.addEntity(metaaniLowYELLOW31)
metaaniLowYELLOW31.setParent(_scene)
metaaniLowYELLOW31.addComponentOrReplace(gltfShape3)
const transform85 = new Transform({
  position: new Vector3(6.199618339538574, 21.007862091064453, 18.115509033203125),
  rotation: new Quaternion(-3.0403184615344307e-15, 0.0980171412229538, -1.1684553768986916e-8, 0.9951847791671753),
  scale: new Vector3(0.9999999403953552, 1, 0.9999999403953552)
})
metaaniLowYELLOW31.addComponentOrReplace(transform85)

const movePlopela = new Entity('movePlopela')
engine.addEntity(movePlopela)
movePlopela.setParent(_scene)
const transform86 = new Transform({
  position: new Vector3(7.5, 14.851948738098145, 32.271636962890625),
  rotation: new Quaternion(-0.5, 0.5000000596046448, 0.5, -0.5000000596046448),
  scale: new Vector3(0.49000024795532227, 0.49000027775764465, 0.49000030755996704)
})
movePlopela.addComponentOrReplace(transform86)
const gltfShape7 = new GLTFShape("6a75f836-f7b0-42b4-86e5-a4852841fea7/move_plopela.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
movePlopela.addComponentOrReplace(gltfShape7)

const kaitenPink = new Entity('kaitenPink')
engine.addEntity(kaitenPink)
kaitenPink.setParent(_scene)
const transform87 = new Transform({
  position: new Vector3(8, 0.24045848846435547, 51.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
kaitenPink.addComponentOrReplace(transform87)
const gltfShape8 = new GLTFShape("e24f4245-582a-46fa-b91d-37a11bfea9b5/kaiten_pink.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
kaitenPink.addComponentOrReplace(gltfShape8)

const kaitenPink2 = new Entity('kaitenPink2')
engine.addEntity(kaitenPink2)
kaitenPink2.setParent(_scene)
kaitenPink2.addComponentOrReplace(gltfShape8)
const transform88 = new Transform({
  position: new Vector3(8, 0.24045848846435547, 32),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
kaitenPink2.addComponentOrReplace(transform88)

const kaitenPink3 = new Entity('kaitenPink3')
engine.addEntity(kaitenPink3)
kaitenPink3.setParent(_scene)
kaitenPink3.addComponentOrReplace(gltfShape8)
const transform89 = new Transform({
  position: new Vector3(10.5, 0.24045848846435547, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
kaitenPink3.addComponentOrReplace(transform89)

const kaitenPink4 = new Entity('kaitenPink4')
engine.addEntity(kaitenPink4)
kaitenPink4.setParent(_scene)
kaitenPink4.addComponentOrReplace(gltfShape8)
const transform90 = new Transform({
  position: new Vector3(10.5, 13.339300155639648, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
kaitenPink4.addComponentOrReplace(transform90)

const kaitenPink5 = new Entity('kaitenPink5')
engine.addEntity(kaitenPink5)
kaitenPink5.setParent(_scene)
kaitenPink5.addComponentOrReplace(gltfShape8)
const transform91 = new Transform({
  position: new Vector3(10.5, 20.83930015563965, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
kaitenPink5.addComponentOrReplace(transform91)

const kaitenPink6 = new Entity('kaitenPink6')
engine.addEntity(kaitenPink6)
kaitenPink6.setParent(_scene)
kaitenPink6.addComponentOrReplace(gltfShape8)
const transform92 = new Transform({
  position: new Vector3(10.5, 27.95587158203125, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
kaitenPink6.addComponentOrReplace(transform92)

const plainText = new Entity('plainText')
engine.addEntity(plainText)
plainText.setParent(_scene)
const transform93 = new Transform({
  position: new Vector3(15.5, 11, 15.5),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(8.000011444091797, 8, 8.000011444091797)
})
plainText.addComponentOrReplace(transform93)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
const script4 = new Script4()
script1.init(options)
script2.init(options)
script3.init(options)
script4.init(options)
script1.spawn(externalLink, {"url":"https://play.decentraland.org/?position=-117,-35"}, createChannel(channelId, externalLink, channelBus))
script2.spawn(imageFromURL, {"image":"https://static.wixstatic.com/media/ebffef_34b695dc6bcd4448a66b09b460b24b46~mv2.png"}, createChannel(channelId, imageFromURL, channelBus))
script2.spawn(imageFromURL2, {"image":"https://static.wixstatic.com/media/ebffef_34b695dc6bcd4448a66b09b460b24b46~mv2.png"}, createChannel(channelId, imageFromURL2, channelBus))
script1.spawn(externalLink2, {"url":"https://play.decentraland.org/?position=-117,-35"}, createChannel(channelId, externalLink2, channelBus))
script3.spawn(videoStream, {"startOn":"false","onClickText":"Play video","volume":1,"onClick":[{"entityName":"videoStream","actionId":"toggle","values":{}}],"customStation":"https://player.vimeo.com/external/642087281.m3u8?s=c74af72615be2562cc6e66b272e6e6891eb21231"}, createChannel(channelId, videoStream, channelBus))
script4.spawn(plainText, {"text":"Meta Tokyo","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText, channelBus))