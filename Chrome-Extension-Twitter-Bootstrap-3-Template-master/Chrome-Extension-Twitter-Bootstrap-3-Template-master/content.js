//initHTMLElements();

//var alt = false;
//var ctrl = false;
//var enabled = false;
//// A variable stores the last mouseover HTML element,
//// ctrl-alt command will show its outHTML on a layer.
//var el = null;
//const inspector = document.getElementById('div-source-viewer');
//const cover = document.getElementById('sv-cover');

//document.body.addEventListener('keydown', e => {
//  if (e.keyCode === 18) {
//    alt = true;
//  } else if (e.keyCode === 17) {
//    ctrl = true;
//  }
//  if (enabled) {
//    let rect = el.getBoundingClientRect();

//    // Show the layer with el's outerHTML
//    show();

//    //inspector.firstChild.innerText = process(el.outerHTML);
//    //if ((rect.bottom + inspector.clientHeight) >= window.innerHeight - 8) {
//    //  inspector.style.top = (rect.top - inspector.clientHeight + window.scrollY - 8) + 'px';
//    //  inspector.classList.add('up');
//    //  inspector.classList.remove('down');
//    //} else {
//    //  inspector.style.top = (rect.bottom + window.scrollY + 8) + 'px';
//    //  inspector.classList.add('down');
//    //  inspector.classList.remove('up');
//    //}

//    //if (rect.left < document.body.clientWidth / 2) {
//    //  inspector.classList.add('left');
//    //  inspector.classList.remove('right');
//    //  inspector.style.left = rect.left + 'px';
//    //  inspector.style.right = null;
//    //} else {
//    //  inspector.classList.add('right');
//    //  inspector.classList.remove('left');
//    //  inspector.style.left = null;
//    //  inspector.style.right = (document.body.clientWidth - rect.right) + 'px';
//    //}

//    // Cover the element with a translucent div
//    cover.style.top = (rect.top + window.scrollY) + 'px';
//    cover.style.left = rect.left + 'px';
//    cover.style.width = rect.width + 'px';
//    cover.style.height = rect.height + 'px';
//  }
//});

//function show() {
//  cover.style.display = 'block';
//}

//function hide() {
//   cover.style.display = null;
//}

//document.body.addEventListener('keyup', e => {
//  switch (e.keyCode) {
//    case 18:
//      alt = false;
//      break;
//    case 17:
//      ctrl = false;
//      break;
//    case 27:
//      hide();
//      break;
//    default:
//      break;
//  }
//});

//document.body.addEventListener('mouseover', e => {
//  el = e.target;
//});

////function process(str) {
////  var div = document.createElement('div');
////  div.innerHTML = str.trim();
////  return format(div, 0).innerHTML;
////}

////function format(node, level) {
////  var indentBefore = new Array(level++ + 1).join('  '),
////    indentAfter = new Array(level - 1).join('  '),
////    textNode;
////  for (var i = 0; i < node.children.length; i++) {
////    textNode = document.createTextNode('\n' + indentBefore);
////    node.insertBefore(textNode, node.children[i]);
////    format(node.children[i], level);
////    if (node.lastElementChild == node.children[i]) {
////      textNode = document.createTextNode('\n' + indentAfter);
////      node.appendChild(textNode);
////    }
////  }

////  return node;
////}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log('Receive message: ' + request.enabled);;

  //setTimeout(chrome.windows.get(windowId, function (window) {
  //    alert(window.id);

  //    console.log('windowid:' + window.id);
  //}), 0);
  //alert('tset');
  //var iframe = document.createElement('iframe');
  //iframe.src = chrome.extension.getURL("popup.html");
  //iframe.frameBorder = 0;
  //iframe.id = "iframeModal";
  ////$(iframe).hide();//necessary otherwise frame will be visible

  //console.log($(iframe));
  //$(iframe).appendTo("body");

  var popurl = chrome.extension.getURL("popup.html");

  var model = `
 <div id='dialog' title='jQuery Dialog' width='900' style='z-index:1050'>
        <div data-role='body'>
             <iframe id='xy_iframe' src='`+ popurl +`' width='800' height='600' frameborder='0' allowtransparency='true'></iframe>
        </div>
        <div data-role='footer'>
            <button class='gj-button' data-role='close'>Cancel</button>
            <button class='gj-button' id='goclose'>OK</button>
        </div>
    </div>               
`;

  $("body").append(model);

  var dialog;

  dialog = $("#dialog").dialog({
      resizable: true
  });

  $(function () {
      $('#xy_close', document.getElementById('xy_iframe').contentWindow.document ).on('click', function () {
          alert('test');
          dialog.close();
         
      });
  });


 

 
    //  <iframe src='`+ popurl +`' width='800' height='600' frameborder='0' allowtransparency='true'></iframe>
  //$("body").append(model);

  //$("#myModal").draggable({
  //    handle: ".modal-header"
  //});


  //var ui = `<div id='dialog' title='test'>
  //    <iframe src='`+ popurl +`' width='800' height='600' frameborder='0' allowtransparency='true'></iframe>
  //</div>`;
  //$("body").append(ui);

  //$("#dialog").dialog({
  //    height: 700,
  //    width: 900,
  //    open: function () {
  //        var closeBtn = $('.ui-dialog-titlebar-close');
  //        closeBtn.append('<span class="ui-button-icon-primary ui-icon ui-icon-closethick"></span><span class="ui-button-text">close</span>');
  //    }

  //});
  sendResponse({
    status: 'ok'
  });
});

//function initHTMLElements() {
//  // Append source viewer panel to body
//  //let viewer = document.createElement('div');
//  //viewer.id = 'div-source-viewer';
//  //viewer.classList.add('source-viewer');

//  //// HTML content container
//  //viewer.appendChild(document.createElement('div'));

//  //document.body.appendChild(viewer);

//  // Cover
//  let cover = document.createElement('div');
//  cover.id = 'sv-cover';
//  document.body.appendChild(cover);
//}

//alert('test');