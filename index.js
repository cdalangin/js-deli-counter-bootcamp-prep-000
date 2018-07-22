var katzDeli=[];
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  var linePlace=katzDeliLine.length
  return `Welcome, ${name}. You are number ${linePlace} in line.`
}
function nowServing(katzDeliLine) {
  if(katzDeliLine.length !== 0) {
    var name = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${name}.`;
  } else {
    return `There is nobody waiting to be served!`
  }
}
function currentLine(katzDeliLine) {
  if(katzDeliLine.length===0) {
    return `The line is currently empty.`
  } else {
     var line= [];
    for(var i=0; i<katzDeliLine.length; i++) {
     line.push(katzDeliLine[i])
    }
  return `The line is currently: ${line.join([i])}`
  }
}