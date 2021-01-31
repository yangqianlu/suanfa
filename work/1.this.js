// 如果最大值填完了 ，再输入最小值后，再对最大值进行一次校验
function validatorAgainMaxVal(adhocFilter, _this){
  if (adhocFilter.maxVal) {
    _this.refs.$form.validateField('maxVal');
  }
};
// 最小值的校验
export function validatorMinVal (adhocFilter, canBeEmpty)  {
  let _this = this;
  return (rule, value, callback) => {
    if (value === '' && canBeEmpty) {
      validatorAgainMaxVal(adhocFilter, _this);
      callback(new Error(strings.PLEASE_ENTER_MIN_VALUE));
    } else if (!isNumber(+value)) {
      validatorAgainMaxVal(adhocFilter, _this);
      callback(new Error(strings.PLEASE_ENTER_A_NUMBER));
    } else if (hasInt(adhocFilter.labelType)) {
      if (!isInteger(value)) {
        validatorAgainMaxVal(adhocFilter, _this);
        callback(new Error(strings.PLEASE_ENTER_AN_INTEGER));
      } else {
        validatorAgainMaxVal(adhocFilter, _this);
        callback();
      }
    } else {
      validatorAgainMaxVal(adhocFilter, _this);
      callback();
    }
  };
};

// 最大值的校验
export function validatorMaxVal(adhocFilter, canBeEmpty)  {
  return (rule, value, callback) => {
    const { min, max } = this.state;
    if (value === '' && !canBeEmpty) {
      callback(new Error(strings.PLEASE_ENTER_MAX_VALUE));
    } else if (!isNumber(+value)) {
      callback(new Error(strings.PLEASE_ENTER_A_NUMBER));
    } else if (hasInt(adhocFilter.labelType)) {
      if (!isInteger(value)) {
        callback(new Error(strings.PLEASE_ENTER_AN_INTEGER));
      }
    }
    if (min && max && +value < +adhocFilter.minVal && adhocFilter.minVal) {
      callback(new Error(strings.MAXVALUE_MUST_GREATER_MINVALUE));
    } else if ((!min || !max) && +value <= +adhocFilter.minVal && adhocFilter.minVal) {
      callback(new Error(strings.MAXVALUE_MUST_GREATER_MINVALUE));
    } else {
      callback()
    }
  };
};