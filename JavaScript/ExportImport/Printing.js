// This function is available outside this file,
// to other code that imports it.

// Note that code using import or export is a
// module, and cannot be referenced by non-modules.

export function printAt(id, txt)
{
    document.getElementById(id).innerHTML = txt;
}