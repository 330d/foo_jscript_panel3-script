var tfTitle = fb.TitleFormat("%title%");
var tfTime  = fb.TitleFormat("%playback_time% / %length%");

var fontTitle = JSON.stringify({ Name: "NSimSun", Size: 20, Weight: 400 });
var fontTime  = JSON.stringify({ Name: "NSimSun", Size: 15, Weight: 400 });

function getColors() {
    try {
        var bg   = window.IsDefaultUI ? window.GetColourDUI(1) : window.GetColourCUI(3);
        var text = window.IsDefaultUI ? window.GetColourDUI(0) : window.GetColourCUI(0);
        return { bg: bg, text: text };
    } catch(e) {
        return { bg: 0xFF1E1E1E, text: 0xFFE0E0E0 };
    }
}

function on_paint(gr) {
    var colors = getColors();
    gr.FillRectangle(0, 0, window.Width, window.Height, colors.bg);
    var midY = Math.floor(window.Height / 2);
    if (fb.IsPlaying || fb.IsPaused) {
        gr.WriteText(tfTitle.Eval(), fontTitle, colors.text, 0, 0, window.Width, midY, 2, 2);
        gr.WriteText(tfTime.Eval(), fontTime, colors.text, 0, midY, window.Width, midY, 2, 2);
    }
}

function on_colours_changed() { window.Repaint(); }
function on_playback_time() { window.Repaint(); }
function on_playback_new_track() { window.Repaint(); }
function on_playback_stop() { window.Repaint(); }
function on_playback_seek() { window.Repaint(); }
function on_size() { window.Repaint(); }