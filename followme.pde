String texttodraw = "follow me";
PVector[] positions;
PFont font;
int i;

void setup() {
  size(500,500);
 
  pixelDensity(2);
  
  font = createFont("AlteHaasGroteskBold.ttf", 30);
  textFont(font);
  
  positions = new PVector[(texttodraw.length())*6];
  for (i=0; i< positions.length; i++) {
    positions[i] = new PVector(-width/2, -height/2);
  }
}

void draw() {
  background(51,0,102);
  
  textSize(25);
  fill(204,255,153);
  for (i= (texttodraw.length())*6 - 1; i>0; i--){
    positions[i].set(positions[i-1]);
  }
  positions[0].set(mouseX, mouseY);
  
  
  for (int i = 0; i < texttodraw.length(); i++) {
    int posIndex = i * 6;  // Space out letters
    text(texttodraw.charAt(i), positions[posIndex].x, positions[posIndex].y);
  }
}
