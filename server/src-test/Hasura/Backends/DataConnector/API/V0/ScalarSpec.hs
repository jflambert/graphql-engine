{-# LANGUAGE QuasiQuotes #-}

module Hasura.Backends.DataConnector.API.V0.ScalarSpec (spec, genType) where

import Data.Aeson.QQ.Simple (aesonQQ)
import Hasura.Backends.DataConnector.API.V0.Scalar
import Hasura.Generator.Common (defaultRange, genArbitraryAlphaNumText)
import Hasura.Prelude
import Hedgehog
import Hedgehog.Gen qualified as Gen
import Test.Aeson.Utils
import Test.Hspec

spec :: Spec
spec = do
  describe "Type" $ do
    describe "StringTy" $
      testToFromJSONToSchema StringTy [aesonQQ|"string"|]
    describe "NumberTy" $
      testToFromJSONToSchema NumberTy [aesonQQ|"number"|]
    describe "BoolTy" $
      testToFromJSONToSchema BoolTy [aesonQQ|"bool"|]
    describe "CustomTy" $
      testToFromJSONToSchema (CustomTy "foo") [aesonQQ|"foo"|]
    jsonOpenApiProperties genType

genType :: MonadGen m => m ScalarType
genType =
  Gen.choice [pure StringTy, pure NumberTy, pure BoolTy, CustomTy <$> genArbitraryAlphaNumText defaultRange]