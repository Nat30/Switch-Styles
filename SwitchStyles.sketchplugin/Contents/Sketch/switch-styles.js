// Sketch 2025 兼容的样式交换插件 - 静默版本
var onRun = function(context) {
    try {
        // 获取当前文档 - 兼容插件环境
        var doc = context.document || NSDocumentController.sharedDocumentController().currentDocument();
        
        if (!doc) {
            return; // 静默失败
        }
        
        // 获取选中的图层
        var selection = context.selection || doc.selectedLayers();
        var count = selection ? selection.count() : 0;
        
        // 验证选择 - 静默处理
        if (count !== 2) {
            return; // 静默失败，不显示错误信息
        }
        
        var layer1 = selection.objectAtIndex(0);
        var layer2 = selection.objectAtIndex(1);
        
        // 执行样式交换
        var style1 = layer1.style();
        var style2 = layer2.style();
        
        if (!style1 || !style2) {
            return; // 静默失败
        }
        
        // 创建样式副本并交换
        var tempStyle = style1.copy();
        layer1.setStyle(style2.copy());
        layer2.setStyle(tempStyle);
        
        // 静默成功，不显示任何弹窗
        
    } catch (error) {
        // 静默处理错误，不显示任何弹窗
    }
};